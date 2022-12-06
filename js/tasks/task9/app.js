let calculator = {
    read: () => {
        let eded1 = +prompt('birinci ededi daxil edin')
        let eded2 = +prompt('ikinci ededi daxil edin')
        calculator.ed1 = eded1
        calculator.ed2 = eded2
    },
    sum: () => {
        console.log(`ededlerin cemi:`, calculator.ed1 + calculator.ed2)
    },
    mul: () => {
        console.log(`ededlerin hasili:`, calculator.ed1 * calculator.ed2);
    },
    div: () => {
        console.log(`ededlerin nisbeti:`, calculator.ed1 / calculator.ed2);
    },
    sub: () => {
        console.log(`ededlerin ferqi:`, calculator.ed1 - calculator.ed2);
    }

}

calculator.read()
calculator.sum()
calculator.mul()
calculator.div()
calculator.sub()