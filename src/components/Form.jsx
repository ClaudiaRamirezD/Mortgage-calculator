import { SvgIconCalculator } from './IconCalculator.jsx';

const Form = ({ formData, handleChange, handleSubmit }) => {
    
    return (
        <form onSubmit={handleSubmit} className='pt-7 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <label>Mortgage Amount</label>
                <div className='form-input '>
                    <span className='form-sign'>$</span>
                    <input
                        type="text"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                        placeholder=''
                        className='text-[var(--slate-900)] font-bold focus:outline-none px-2 cursor-pointer'
                        style={{
                        MozAppearance: 'textfield', // Firefox
                        WebkitAppearance: 'none', // Safari
                        }}
                        inputMode="numeric"
                    />
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <label>Mortgage Term</label>
                    <div className='form-input-between'>
                        <input
                            type="number"
                            name="term"
                            value={formData.term}
                            onChange={handleChange}
                            required
                            placeholder=""
                            className='text-[var(--slate-900)] font-bold focus:outline-none px-2 cursor-pointer'
                            style={{
                            MozAppearance: 'textfield', // Firefox
                            WebkitAppearance: 'none', // Safari
                            }}
                        />
                        <span className='form-sign years'>years</span>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <label>Interest Rate</label>
                    <div className='form-input-between'>
                        <input
                            type="number"
                            name="rate"
                            value={formData.rate}
                            onChange={handleChange}
                            required
                            placeholder=""
                            step="0.01"
                            className='text-[var(--slate-900)] font-bold focus:outline-none px-2 cursor-pointer'
                            style={{
                            MozAppearance: 'textfield', // Firefox
                            WebkitAppearance: 'none', // Safari
                            }}
                        />
                        <span className='form-sign'>%</span>
                    </div>
                </div>
            </div>

            <fieldset className="flex flex-col gap-2">
                <legend className="pb-2">Mortgage Type</legend>

                {/* Repayment */}
                <label className="flex items-center gap-2 cursor-pointer p-2 rounded-md border border-slate-900 transition-colors peer-checked:bg-[hsl(61,70%,75%)] peer-checked:border-[var(--lime)]">
                    <input
                        type="radio"
                        name="types"
                        value="Repayment"
                        checked={formData.types === 'Repayment'}
                        onChange={handleChange}
                        className="peer hidden"
                    />
                    <span className="size-4 rounded-full border border-slate-900 peer-checked:border-[var(--lime)] flex items-center justify-center transition-colors">
                        <span
                        className={`h-2.5 w-2.5 rounded-full bg-[var(--lime)] transition-opacity ${
                            formData.types === 'Repayment' ? 'opacity-100' : 'opacity-0'
                        }`}></span>
                    </span>
                    <span className='text-[var(--slate-900)]'>Repayment</span>
                </label>

                {/* Interest Only */}
                <label className="flex items-center gap-2 cursor-pointer p-2 rounded-md border border-slate-900 transition-colors peer-checked:bg-[hsl(61,70%,75%)] peer-checked:border-[var(--lime)]">
                    <input
                        type="radio"
                        name="types"
                        value="Interest Only"
                        checked={formData.types === 'Interest Only'}
                        onChange={handleChange}
                        className="peer hidden"
                    />
                    <span className="size-4 rounded-full border border-slate-900 peer-checked:border-[var(--lime)] flex items-center justify-center transition-colors">
                        <span
                        className={`h-2.5 w-2.5 rounded-full bg-[var(--lime)] transition-opacity ${
                            formData.types === 'Interest Only' ? 'opacity-100' : 'opacity-0'
                        }`}></span>
                    </span>
                    <span className='text-[var(--slate-900)]'>Interest Only</span>
                </label>
            </fieldset>



            <button type="submit" className='flex justify-center items-center gap-2 bg-[var(--lime)] text-[var(--slate-900)] font-bold py-2 rounded-full hover:bg-[hsl(61,70%,75%)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'>
                <SvgIconCalculator className="w-6 h-6" />
                <p>Calculate Repayments</p>
            </button>
        </form>
    );
};

export default Form;