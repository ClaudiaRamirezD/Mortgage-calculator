import { SvgIconCalculator } from './IconCalculator.jsx';

const Form = ({ formData, handleChange, handleSubmit, errors }) => {
    return (
        <form onSubmit={handleSubmit} className="pt-7 flex flex-col gap-4" aria-labelledby="mortgage-calculator-form">
            <h2 id="mortgage-calculator-form" className="sr-only">Mortgage Calculator Form</h2>

            {/* Mortgage Amount */}
            <div className="flex flex-col gap-2">
                <label htmlFor="amount">Mortgage Amount</label>
                <div className={`form-input ${errors.amount ? 'error' : ''} cursor-pointer`}>
                    <span className="form-sign" aria-hidden="true">$</span>
                    <input
                        id="amount"
                        type="text"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder=""
                        className="text-[var(--slate-900)] font-bold focus:outline-none px-2 cursor-pointer"
                        style={{
                            MozAppearance: "textfield", // Firefox
                            WebkitAppearance: "none", // Safari
                        }}
                        inputMode="numeric"
                        aria-invalid={errors.amount ? "true" : "false"}
                        aria-describedby="amount-error"
                    />
                </div>
                {errors.amount && (
                    <small id="amount-error" className="text-[var(--red)] font-semibold">
                        This field is required
                    </small>
                )}
            </div>

            {/* Mortgage Term */}
            <div className="flex flex-col gap-2">
                <label htmlFor="term">Mortgage Term</label>
                <div className={`form-input-between ${errors.term ? 'error' : ''}`}>
                    <input
                        id="term"
                        type="number"
                        name="term"
                        value={formData.term}
                        onChange={handleChange}
                        placeholder=""
                        className="text-[var(--slate-900)] font-bold focus:outline-none px-2 cursor-pointer w-full"
                        style={{
                            MozAppearance: "textfield", // Firefox
                            WebkitAppearance: "none", // Safari
                        }}
                        aria-invalid={errors.term ? "true" : "false"}
                        aria-describedby="term-error"
                    />
                    <span className="form-sign years" aria-hidden="true">years</span>
                </div>
                {errors.term && (
                    <small id="term-error" className="text-[var(--red)] font-semibold">
                        This field is required
                    </small>
                )}
            </div>

            {/* Interest Rate */}
            <div className="flex flex-col gap-2">
                <label htmlFor="rate">Interest Rate</label>
                <div className={`form-input-between ${errors.rate ? 'error' : ''}`}>
                    <input
                        id="rate"
                        type="number"
                        name="rate"
                        value={formData.rate}
                        onChange={handleChange}
                        placeholder=""
                        step="0.01"
                        min="0"
                        max="100"
                        className="text-[var(--slate-900)] font-bold focus:outline-none px-2 cursor-pointer w-full"
                        style={{
                            MozAppearance: "textfield", // Firefox
                            WebkitAppearance: "none", // Safari
                        }}
                        aria-invalid={errors.rate ? "true" : "false"}
                        aria-describedby="rate-error"
                    />
                    <span className="form-sign">%</span>
                </div>
                {errors.rate && (
                    <small id="rate-error" className="text-[var(--red)] font-semibold">
                        This field is required
                    </small>
                )}
            </div>

            {/* Mortgage Type */}
            <fieldset className="flex flex-col gap-2" aria-labelledby="mortgage-type">
                <legend id="mortgage-type" className="pb-2">Mortgage Type</legend>

                {/* Repayment */}
                <label 
                    htmlFor="repayment" 
                    className="flex items-center gap-2 cursor-pointer p-2 rounded-md border-2 border-slate-900 box-border transition-colors peer-checked:bg-[hsl(61,70%,75%)] peer-checked:border-[var(--lime)] hover:bg-[hsl(61,70%,90%)] hover:border-[var(--lime)]">
                    <input
                        id="repayment"
                        type="radio"
                        name="types"
                        value="Repayment"
                        checked={formData.types === 'Repayment'}
                        onChange={handleChange}
                        className="peer appearance-none "
                        aria-checked={formData.types === 'Repayment'}
                    />
                    <span className="size-4 rounded-full border border-slate-900 peer-checked:border-[var(--lime)] flex items-center justify-center transition-colors">
                        <span
                            className={`h-2.5 w-2.5 rounded-full bg-[var(--lime)] transition-opacity ${
                                formData.types === 'Repayment' ? 'opacity-100' : 'opacity-0'
                            }`}
                        ></span>
                    </span>
                    <span className="text-[var(--slate-900)]">Repayment</span>
                </label>

                {/* Interest Only */}
                <label 
                    htmlFor="interest-only" 
                    className="flex items-center gap-2 cursor-pointer p-2 rounded-md border-2 border-slate-900 box-border transition-colors peer-checked:bg-[hsl(61,70%,75%)] peer-checked:border-[var(--lime)] hover:bg-[hsl(61,70%,90%)] hover:border-[var(--lime)]">
                    <input
                        id="interest-only"
                        type="radio"
                        name="types"
                        value="Interest Only"
                        checked={formData.types === 'Interest Only'}
                        onChange={handleChange}
                        className="peer appearance-none "
                        aria-checked={formData.types === 'Interest Only'}
                    />
                    <span className="size-4 rounded-full border border-slate-900 peer-checked:border-[var(--lime)] flex items-center justify-center transition-colors">
                        <span
                            className={`h-2.5 w-2.5 rounded-full bg-[var(--lime)] transition-opacity ${
                                formData.types === 'Interest Only' ? 'opacity-100' : 'opacity-0'
                            }`}
                        ></span>
                    </span>
                    <span className="text-[var(--slate-900)]">Interest Only</span>
                </label>
            </fieldset>

            {errors.type && (
                <small className="text-[var(--red)] font-semibold">
                    This field is required
                </small>
            )}

            <button
                type="submit"
                className="flex justify-center items-center gap-2 bg-[var(--lime)] text-[var(--slate-900)] font-bold py-2 rounded-full hover:bg-[hsl(61,70%,75%)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer md:mt-4 lg:w-2/3"
                aria-label="Calculate mortgage repayments"
            >
                <SvgIconCalculator className="w-6 h-6" />
                <p>Calculate Repayments</p>
            </button>
        </form>
    );
};

export default Form;