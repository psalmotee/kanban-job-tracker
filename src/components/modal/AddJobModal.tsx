import { useForm } from "react-hook-form";

import { Button, Input, Modal } from "@/components/ui";

interface AddJobModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (company: string, position: string) => void;
}

interface FormValues {
  company: string;
  position: string;
}

export function AddJobModal({
  open,
  onClose,
  onSubmit,
}: AddJobModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  function submit(values: FormValues) {
    onSubmit(values.company, values.position);
    reset();
    onClose();
  }

  return (
    <Modal open={open}>
      <h2 className="mb-6 text-xl font-semibold">
        Add Job
      </h2>

      <form
        onSubmit={handleSubmit(submit)}
        className="space-y-4"
      >
        <div>
          <Input
            placeholder="Company"
            {...register("company", {
              required: "Company is required",
            })}
          />

          {errors.company && (
            <p className="mt-1 text-sm text-red-500">
              {errors.company.message}
            </p>
          )}
        </div>

        <div>
          <Input
            placeholder="Position"
            {...register("position", {
              required: "Position is required",
            })}
          />

          {errors.position && (
            <p className="mt-1 text-sm text-red-500">
              {errors.position.message}
            </p>
          )}
        </div>

        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={isSubmitting}
          >
            Add Job
          </Button>
        </div>
      </form>
    </Modal>
  );
}