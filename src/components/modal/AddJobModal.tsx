import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button, Input, Modal } from "@/components/ui";

interface AddJobForm {
  company: string;
  position: string;
}

interface AddJobModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (company: string, position: string) => void;
}

export function AddJobModal({ open, onClose, onSubmit }: AddJobModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddJobForm>({
    defaultValues: {
      company: "",
      position: "",
    },
  });

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  function submitForm(data: AddJobForm) {
    onSubmit(data.company.trim(), data.position.trim());

    reset();
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Add a new job"
      description="Keep track of a new application on your board."
    >
      <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
        <Input
          id="company"
          label="Company"
          placeholder="e.g. Microsoft"
          autoComplete="organization"
          error={errors.company?.message}
          {...register("company", {
            required: "Company name is required.",
            minLength: {
              value: 2,
              message: "Company name must be at least 2 characters.",
            },
          })}
        />

        <Input
          id="position"
          label="Position"
          placeholder="e.g. Frontend Developer"
          autoComplete="organization-title"
          error={errors.position?.message}
          {...register("position", {
            required: "Position is required.",
            minLength: {
              value: 2,
              message: "Position must be at least 2 characters.",
            },
          })}
        />

        <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
          <Button type="button" variant="secondary" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </Button>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Job"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
