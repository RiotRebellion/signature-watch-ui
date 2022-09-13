export function SignatureTypeIntToStringConverter(value){
    switch (value){
        case 0: return "Физическая";
        case 1: return "Юридическая";
        default: return "Неопределен";
    }
}

export function SignatureTypeStringToIntConverter(value){
    return null;
}