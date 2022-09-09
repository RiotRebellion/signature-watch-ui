export function EmployeeStatusIntToStringConverter(value){
    switch (value){
        case 0: return "Работает";
        case 1: return "Не работает";
        default: return "Неопределен";
    }
}

export function EmployeeStatusStringToIntConverter(value){
    return null;
}