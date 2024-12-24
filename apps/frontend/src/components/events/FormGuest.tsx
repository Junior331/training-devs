import { GuestI } from "core";
import { EntryField, FieldYesNo } from "@/components/shared";

export interface FormGuestProps {
  guest: Partial<GuestI>;
  guestChanged: (guest: Partial<GuestI>) => void;
}

export const FormGuest = ({ guest, guestChanged }: FormGuestProps) => {
  return (
    <div className="flex flex-col gap-5">
      <EntryField
        label="Nome"
        value={guest.name ?? ""}
        onChange={(e) => guestChanged({ ...guest, name: e.target.value })}
      />
      <EntryField
        label="Email"
        value={guest.email ?? ""}
        onChange={(e) => guestChanged({ ...guest, email: e.target.value })}
      />
      <div className="flex gap-5">
        <FieldYesNo
          label="Presença Confirmada?"
          value={guest.confirmed ?? true}
          onChange={(value) => guestChanged({ ...guest, confirmed: value })}
          className="flex-1"
        />
        {guest.confirmed && (
          <div className="flex-1 flex gap-5">
            <FieldYesNo
              label="Possui Acompanhantes?"
              value={guest.hasAccompaniments ?? false}
              onChange={(value) =>
                guestChanged({
                  ...guest,
                  hasAccompaniments: value,
                  accompanimentsQuantity: value ? 1 : 0,
                })
              }
              className="flex-1"
            />
            {guest.hasAccompaniments && (
              <EntryField
                label="Quantos Acompanhantes?"
                value={guest.accompanimentsQuantity ?? 1}
                onChange={(e) =>
                  guestChanged({
                    ...guest,
                    accompanimentsQuantity: +e.target.value,
                  })
                }
                min={1}
                type="number"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
