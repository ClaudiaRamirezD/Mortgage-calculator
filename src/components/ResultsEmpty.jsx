import { SvgIllustrationEmpty } from './illustration-empty.jsx';

const ResultsEmpty = () => { 
    return (
        <section className='results-empty flex flex-col items-center justify-center gap-2 '>
            <SvgIllustrationEmpty className="w-6 h-6" />
            <h2 className='text-white font-bold'>Results shown here</h2>
            <p className='text-[var(--slate-300)] text-center font-semibold text-sm'>
            Complete the form and click "Calculate Repayments" to see what your monthly repayments would be.
            </p>
        </section>
    )
}

export default ResultsEmpty;