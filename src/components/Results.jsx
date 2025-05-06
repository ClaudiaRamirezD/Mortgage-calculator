import ResultsEmpty from "./ResultsEmpty"
import ResultsFilled from "./ResultsFilled"


const Results = ({ results }) => {
    const { monthlyRepayment, totalRepayment } = results;
    
    console.log('Results component', results); // Verifica qué datos llegan aquí

    return (
    <div>
        {monthlyRepayment > 0 ? (
        <ResultsFilled
            monthlyRepayment={monthlyRepayment}
            totalRepayment={totalRepayment}
        />
        ) : (
        <ResultsEmpty />
        )}
    </div>
    );
};


export default Results;