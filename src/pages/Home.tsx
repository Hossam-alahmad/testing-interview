import DBox from "../components/DBox";
import DHeading from "../components/DHeading";
import { useForm, SubmitHandler } from "react-hook-form";
import TextInput from "../components/Form/TextInput";
import { Fragment, useEffect, useState } from "react";
import SelectInput from "../components/Form/SelectInput";
import CheckboxInput from "../components/Form/CheckboxInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import DButton from "../components/DButton";
import { Spinner } from "@chakra-ui/react";
import sectorData from "../utils/sectorsData.json";
import { toast } from "react-hot-toast";
type Inputs = {
    name: string;
    sector: string;
    terms: boolean;
};
const validation = Yup.object().shape({
    name: Yup.string().required("this field required"),
    sector: Yup.string().required("this field required"),
    terms: Yup.boolean()
        .equals([true], "you must agree")
        .required("you must agree"),
});
const Home = () => {
    const auth = sessionStorage.getItem("test-interview");
    const [userInfo, setUserInfo] = useState({} as Inputs);
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors, isSubmitted, isDirty },
    } = useForm<Inputs>({
        values: userInfo,
        resolver: yupResolver(validation),
        mode: "all",
    });
    useEffect(() => {
        if (!auth || Object.keys(auth).length === 0) {
            sessionStorage.setItem(
                "test-interview",
                JSON.stringify({
                    name: "",
                    terms: false,
                    sector: "",
                })
            );
        } else {
            const formattedAuth = JSON.parse(auth);
            setUserInfo(formattedAuth);
        }
    }, [auth]);

    const formattedData = (data: any, index = 1) => {
        return data.map((sector: any) => {
            if (
                sector[`list-lv${index}`]?.length === 0 ||
                sector[`list-lv${index}`] === undefined
            ) {
                return (
                    <option key={sector._id} value={sector._id}>
                        {index !== 1 ? "\u00A0".repeat(index) : ""}
                        {sector.name}
                    </option>
                );
            }

            return (
                <Fragment key={sector._id}>
                    <option className="font-bold disabled:text-black" disabled>
                        {index !== 1 ? "\u00A0".repeat(index) : ""}
                        {sector.name}
                    </option>
                    {formattedData(sector[`list-lv${index}`], index + 1)}
                </Fragment>
            );
        });
    };

    const onSubmit: SubmitHandler<Inputs> = data => {
        toast.success("Save data successfully");
        sessionStorage.setItem("test-interview", JSON.stringify(data));
        setTimeout(() => {
            reset();
        }, 2000);
    };
    return (
        <div className="min-h-screen">
            <DBox className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[90%] md:w-auto">
                <div className="text-center mb-4">
                    <DHeading as="h1" className="mb-4">
                        Welcome
                    </DHeading>
                    <p>
                        {" "}
                        Please enter your name and pick the Sectors you are
                        currently involved in.
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <TextInput
                            type="text"
                            label="Name:"
                            id="name"
                            {...register("name")}
                            bgColor="forth"
                            className="border"
                            errorMsg={errors.name?.message}
                        />
                    </div>
                    <div className="mb-4">
                        <SelectInput
                            {...register("sector")}
                            id="sector"
                            label="Sectors:"
                            bgColor="forth"
                            errorMsg={errors.sector?.message}
                        >
                            {formattedData(sectorData)}
                        </SelectInput>
                    </div>
                    <div className="mb-4">
                        <CheckboxInput
                            id="term"
                            bgColor="forth"
                            {...register("terms")}
                            label="Agree to terms"
                            errorMsg={errors.terms?.message}
                            isChecked={getValues("terms")}
                        />
                    </div>
                    <DButton
                        disabled={isSubmitted && !isDirty}
                        className="w-full text-white"
                        type="submit"
                    >
                        {isSubmitted && !isDirty ? <Spinner /> : "Save"}
                    </DButton>
                </form>
            </DBox>
        </div>
    );
};

export default Home;
