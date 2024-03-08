import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { ChangeEvent, useState } from "react";
import * as Yup from "yup";

interface IFormikValues {
  fullName: string;
  phone: string;
  email: string;
}

const ProfileForm: React.FC = () => {
  const [fileName, setFileName] = useState<string>("");
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const initialValues: IFormikValues = {
    fullName: "",
    phone: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(60, "Too Long!")
      .required("Full name is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = async (
    values: IFormikValues,
    actions: FormikHelpers<IFormikValues>
  ) => {
    try {
      console.log(values);
      console.log(actions);
      const response = await axios.post("https://example.com/api/user", values);
      console.log("Form submitted successfully:", response.data);
      setFileName("");
      actions.resetForm();
      setSubmitSuccess(true);
      setSubmitError("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitSuccess(false);
      setSubmitError("Error submitting form. Please try again later.");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <h3 className="font-bold text-[32px] mb-8">Profile</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {(formik) => (
          <Form className="flex flex-col gap-4">
            <label
              htmlFor="fullName"
              className="relative flex items-center border border-[#212325]/20 p-1 rounded-lg"
            >
              <span className="flex-none text-[#2177B3]/50 pl-3 mr-2 font-semibold text-lg">
                Full Name:
              </span>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                className="border-none focus:outline-none bg-transparent font-semibold text-[#212325] placeholder-[#212325] w-full placeholder:text-black/30"
                placeholder="Enter your full name"
              />
            </label>
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-red-500"
            />
            <label
              htmlFor="phone"
              className="relative flex items-center border border-[#212325]/20 p-1 rounded-lg"
            >
              <span className="flex-none text-[#2177B3]/50 pl-3 mr-2 font-semibold text-lg">
                Phone:
              </span>
              <Field
                id="phone"
                name="phone"
                className="border-none focus:outline-none bg-transparent font-semibold text-[#212325] placeholder-[#212325] w-full placeholder:text-black/30"
                placeholder="Enter your phone"
              />
            </label>
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500"
            />
            <label
              htmlFor="email"
              className="relative flex items-center border border-[#212325]/20 p-1 rounded-lg"
            >
              <span className="flex-none text-[#2177B3]/50 pl-3 mr-2 font-semibold text-lg">
                E-Mail:
              </span>
              <Field
                type="email"
                id="email"
                name="email"
                className="border-none focus:outline-none bg-transparent font-semibold text-[#212325] placeholder-[#212325] w-full placeholder:text-black/30"
                placeholder="Enter your e-mail"
              />
            </label>
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
            <label
              htmlFor="cvUpload"
              className="relative flex items-center justify-center border border-[#212325]/20 p-1 rounded-lg text-center"
            >
              <div>
                <span className="text-[#2177B3]/50 flex items-center gap-2 font-semibold text-lg">
                  <DocumentArrowDownIcon className="w-5" />
                  Upload CV:
                </span>
                <span className="text-[#2177B3]/50 block">
                  Uploaded file: {fileName}
                </span>
              </div>
              <Field
                type="file"
                id="cvUpload"
                name="cvUpload"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {submitSuccess && (
              <div className="text-green-500">Form submitted successfully</div>
            )}
            {submitError && <div className="text-red-500">{submitError}</div>}
            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className="self-start bg-[#2177B3]/50 text-white rounded-lg border border-[#212325]/20 py-1 px-2 hover:scale-105 transition"
            >
              {formik.isSubmitting ? "Submitting..." : "Save Changes"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileForm;
