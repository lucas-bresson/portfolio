import StepContainer from './StepContainer';

export default function Step1() {
  return (
    <StepContainer
      title="Personal info"
      headline="Please provide your name, email address, and phone number."
    >
      <div className="mt-6 pb-1.5 font-medium text-marineBlue">Name</div>
      <input
        className="w-full cursor-pointer rounded-lg border border-lightGray p-3 font-semibold text-marineBlue focus:border-purplishBlue focus:outline-none"
        placeholder="e.g. John Doe"
      ></input>
      <div className="mt-6 pb-1.5 font-medium text-marineBlue">
        Email Address
      </div>
      <input
        className="w-full cursor-pointer rounded-lg border border-lightGray p-3 font-semibold text-marineBlue focus:border-purplishBlue focus:outline-none"
        placeholder="e.g. johndoe@example.com"
      ></input>
      <div className="mt-6 pb-1.5 font-medium text-marineBlue">
        Phone Number
      </div>
      <input
        className="w-full cursor-pointer rounded-lg border border-lightGray p-3 font-semibold text-marineBlue focus:border-purplishBlue focus:outline-none"
        placeholder="e.g. +49 91 51201 9038 "
      ></input>
    </StepContainer>
  );
}
