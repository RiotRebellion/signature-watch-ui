export function EmployeeStatusIntToStringConverter(value){
    switch (value){
        case 0: return "Работает";
        case 1: return "Уволен";
        default: return "Неопределен";
    }
}

export function EmployeeStatusStringToIntConverter(value){
    return null;
}