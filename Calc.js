function calc(number) {
    if (typeof number !== 'number') {
        throw new Error("the argument is not a number");
    }

    let result = number;

    function operation(sign, num) {
        if (typeof num !== 'number') {
            throw new Error("the argument is not a number");
        }

        switch (sign) {
            case '+':
                result += num;
                break;
            case '-':
                result -= num;
                break;
            case '*':
                result *= num;
                break;
            case '/':
                if (num === 0) {
                    throw new Error("division by zero");
                }
                result /= num;
                break;
            case '%':
                if (num === 0) {
                    throw new Error("division by zero");
                }
                result %= num;
                break;
            case '**':
                result **= num;
                break;
            default:
                throw new Error("unsupported sign");
        }

        return operation;
    }


    return operation;
}

const value = calc(1)('+', 3);
console.log(value('*', 3) + value('*', 2)); // Выведет 20
