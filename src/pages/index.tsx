import FormWrapper from "@/components/FormWrapper";
import Modal from "@/components/Modal";
import { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <FormWrapper />
    </div>
  );
};

export default Home;
