import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidations {
  // static gör att vi inte behöver skapa en ny instans av klassen för att använda metoden.
  // vi kan anropa den med Klass.Metod()
  // metoden får inte använda ett klass-attribut
  static minCharacters(
    control: AbstractControl,
    limit: number
  ): ValidationErrors | null {
    if ((control.value as string).length < limit) {
      return { minCharacters: true };
    }
    return null; // Inget fel
  }
}
