import { ButtonFromA } from "@pkg/a";
import { ButtonFromB } from "@pkg/b";

export function Pages() {
  return (
    <div>
      {"Test:"}
      <ButtonFromA />
      <ButtonFromB />
    </div>
  );
}
