import { UseFormRegister, FieldErrors } from 'react-hook-form';
import StepContainer from './StepContainer';
import { Inputs } from '../page';

export default function Step1({
  register,
  errors,
}: {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}) {
  return (
    <StepContainer
      title="Personal info"
      headline="Please provide your name, email address, and phone number."
    >
      <div className="space-y-4 md:space-y-6">
        <div>
          <div className="flex justify-between">
            <label htmlFor="name" className="font-medium text-marineBlue">
              Name
            </label>
            {errors?.name && (
              <p className="font-semibold text-strawberryRed">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="mt-1 md:mt-2">
            <input
              type="text"
              id="name"
              {...register('name')}
              autoComplete="name"
              placeholder="e.g. John Doe"
              className="w-full cursor-pointer rounded-lg border border-lightGray p-3 font-semibold text-marineBlue focus:border-purplishBlue focus:outline-none"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <label htmlFor="email" className="font-medium text-marineBlue">
              Email Address
            </label>
            {errors?.email && (
              <p className="font-semibold text-strawberryRed">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mt-1 md:mt-2">
            <input
              type="text"
              id="email"
              {...register('email')}
              autoComplete="email"
              placeholder="e.g. johndoe@example.com"
              className="w-full cursor-pointer rounded-lg border border-lightGray p-3 font-semibold text-marineBlue focus:border-purplishBlue focus:outline-none"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <label htmlFor="phone" className="font-medium text-marineBlue">
              Phone Number
            </label>
            {errors?.phone && (
              <p className="font-semibold text-strawberryRed">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="mt-1 md:mt-2">
            <input
              type="text"
              id="phone"
              {...register('phone')}
              autoComplete="tel"
              placeholder="e.g. +49 16 51201 9038"
              className="w-full cursor-pointer rounded-lg border border-lightGray p-3 font-semibold text-marineBlue focus:border-purplishBlue focus:outline-none"
            />
          </div>
        </div>
      </div>
    </StepContainer>
  );
}
