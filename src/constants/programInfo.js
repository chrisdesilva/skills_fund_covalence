import logo from "../images/logo_covalence.png" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = '69140c47-bb03-4a1b-b674-cc136fdea23d' // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = 'October 29, 2019'

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = { // term details section
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APRRange36: '10.76 - 11.69%',
    APRRange60: 'XX.XX - XX.XX%',
    interestOnly: [
        { // for multiple examples of interest only, add items to interestOnly array
            programName: 'the Immersive Full-Time (Catalyst) program',
            APR36: '10.76%',
            financeCharge36: '$2,761.12',
            IOPayment36: '$77.91',
            FullMonthlyPayment36: '$330.67',
            APR60: 'XX.XX%',
            financeCharge60: '$X,XXX.XX',
            IOPayment60: '$XX.XX',
            FullMonthlyPayment60: '$XXX.XX',
            LoanExampleAmt: '$10,000',
            LoanExampleOFeeAmt: '$400',
            LoanExampleAmtPlusOFee: '$10,400',
            programLength: '9' // program length in months
        },
        { // for multiple examples of interest only, add items to interestOnly array
            programName: 'the Flexible Part-Time (Molecular+) program',
            APR36: '10.94%',
            financeCharge36: '$1,516.43',
            IOPayment36: '$46.75',
            FullMonthlyPayment36: '$198.40',
            APR60: 'XX.XX%',
            financeCharge60: '$X,XXX.XX',
            IOPayment60: '$XX.XX',
            FullMonthlyPayment60: '$XXX.XX',
            LoanExampleAmt: '$6,000',
            LoanExampleOFeeAmt: '$240',
            LoanExampleAmtPlusOFee: '$6,240',
            programLength: '6' // program length in months
        },
    ],
    immediateRepayment: [
        { // for multiple examples of immmediate repayment, add items to immediateRepayment array
            programName: 'the Flexible Part-Time (Molecular+) program',
            APR36: '11.69%',
            financeCharge36: '$1,142.45',
            FullMonthlyPayment36: '$198.40',
            APR60: 'XX.XX%',
            financeCharge60: '$X,XXX.XX',
            FullMonthlyPayment60: '$XXX.XX',
            LoanExampleAmt: '$6,000',
            LoanExampleOFeeAmt: '$240',
            LoanExampleAmtPlusOFee: '$6,240'
        }
    ]
}

export const faq = { // faq section
    costOfLiving: true, // true if at least one program has cost of living included
    costOfLivingPrograms: 'Immersive Full-Time (Catalyst) program', // leave as empty string is cost of living availability is the same across all programs
    multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
    interestOnly: true, // true if interest-only payments are an option
    immediateRepayment: true, // true if immediate repayment is an option
    multipleLoanLengths: false, // true if 36 and 60 month options are both available
    multipleLoanTypes: true, // true if both IR and IO are available
    multiPrograms: true, // only true if there are multiple programs
    onlinePrograms: false, // true if at least one program is remote/online
    schoolHQState: 'WA',
    origFee: 0.04,

    // interest payment FAQ info
    exampleLoanAmount: '$6,000',
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APR36: '10.94%',
    APR60: 'XX.XX - XX.XX%',
    IOPayment36: '$46.75',
    IOPayment60: '$95.25',

    // max loan amounts by program for faq1
    loanRange: [
        {
            programName: "Covalence's Immersive Full-Time (Catalyst) program",
            maxAmount: "$9,500",
            col: true,
            colAmount: "$3,000"
        },
        {
            programName: "Covalences's Flexible Part-Time (Molecular+) program",
            maxAmount: "$6,000",
            col: false,
            colAmount: "$6,000"
        },
    ]
}

// ***** END TERMS AND FAQ INFO ***** 

// ***** BEGIN GENERAL SCHOOL INFO ***** 

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Covalence"

export const schoolURL = 'https://covalence.io/courses/' // update with url of school's website

export const skfURL = 'https://covalence.skills.fund' // update with Skills Fund url

export const headline = "Learn to Code at Covalence" // update headline as appropriate

export const leadContent = {
    header: "Your last step on the path toward changing your career",
    paragraph: `${schoolName} offers full-time and part-time coding bootcamps to provide students with a foundation for a career in software development. ${schoolName} partners with Skills Fund to offer tuition${faq.costOfLiving ? ' and cost of living' : ''} financing so more students like you can access their program.`
}

export const threeStepCardText = {
    step1: "",
    step2: {
        header: "select your program",
        text: "Choose between the Immersive Full-Time (Catalyst) program and Flexible Part-Time (Molecular+) program."
    },
    step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`
}

export const netlifyFormName = 'covalence_contact'

export const GATracking = 'UA-68312423-1'

export const hubspotFormId = "d9139ef4-ee18-4550-9282-9f9483343c2a" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_covalence_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO ***** 


// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 6000
export const placeholder = '$6,000'
export const interestRates = {
    ir36: 8.99,
    ir60: 10.99
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [ // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
    {
        name: "Immersive Full-Time (Catalyst) Program",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKCOVON18",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 12500,
            loanTerm36: true,
            loanTerm60: false,
            '0': { // interest-only 
                k: 11, 
                apr36: 10.76, 
                apr60: 12.51
            },
            '1': null // immediate repayment
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
        showLoanTypes: false, // true if both IR and IO are available
        locations: ["Metro 1", "Metro 2", "Metro 3"],
        metros: [ // list in same order as locations array above
          {
            location: "Metro 1",
            loanInfo: { // // match loanInfo to Program 1 above
              maxLoanAmt: 12500,
              loanTerm36: true,
              loanTerm60: false,
              '0': { 
                  k: 11, 
                  apr36: 10.76, 
                  apr60: 12.51
              },
              '1': null
            }
          }
        ]
    },
    {
        name: "Flexible Part-Time (Molecular+) Program",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKCOVM19",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 6000,
            loanTerm36: true,
            loanTerm60: false,
            '0': { 
                k: 8, 
                apr36: 10.94, 
                apr60: 12.51
            },
            '1': {
              apr36: 11.69
            }
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: true,
        locations: ["Metro 1", "Metro 2"],
        metros: [
            {
              location: "Metro 1",
              loanInfo: { // match loanInfo to Program 2 loanInfo above
                maxLoanAmt: 6000,
                loanTerm36: true,
                loanTerm60: false,
                '0': { 
                    k: 8, 
                    apr36: 10.94, 
                    apr60: 12.51
                },
                '1': {
                  apr36: 11.69
                }
              }
            }
          ]
    }
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText = "Choose the loan amount that works best for you. Borrow up to $9,500 for Covalence's Immersive Full-Time (Catalyst) Program tuition, or up to $6,000 for Flexible Part-Time (Molecular+) Program tuition. Immersive Full-Time (Catalyst) Program students can also borrow up to $3,000 for cost of living."

export const paymentTable = {
    headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
    data: [
        {
            name: "PROGRAM 1",
            tuition: "$13,495",
            col: "$6,000",
            max: "$19,495"
        },
        {
            name: "PROGRAM 2",
            tuition: "$16,495",
            col: "$6,000",
            max: "$22,495"
        },
        {
            name: "PROGRAM 3",
            tuition: "$13,495",
            col: "--",
            max: "$13,495"
        },
    ],
    show: false
}

// ***** END LOAN CALC TEXT INFO *****


// ***** Snippets for Netlify ***** 

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>

