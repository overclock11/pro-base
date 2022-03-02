/**
 * Agrupador global puede tener clases, metodos y contantes, para dar acceso desde afuera es necesario usar
 * la palabra export
 */
namespace Validations {
    export const validateText = (text: string) => {
        return text.length > 3;
    }
    export const validateDate = (date: Date) => {
        return isNaN(date.valueOf());
    }
}
console.log(Validations.validateText('Julian'));
