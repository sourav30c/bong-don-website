'use client';

import { useState, useId } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

type TabType = 'egfr' | 'bmi' | 'ckd';
type GStage = 'G1' | 'G2' | 'G3a' | 'G3b' | 'G4' | 'G5';
type AStage = 'A1' | 'A2' | 'A3';

export default function CalculatorsPage() {
    const [activeTab, setActiveTab] = useState<TabType>('egfr');

    // -------------------------------------------------------------
    // eGFR Calculator State (CKD-EPI 2021)
    // -------------------------------------------------------------
    const [egfrAge, setEgfrAge] = useState<number>(45);
    const [egfrSex, setEgfrSex] = useState<'male' | 'female'>('male');
    const [egfrCreatinine, setEgfrCreatinine] = useState<string>('1.0');
    const [egfrUnit, setEgfrUnit] = useState<'mgdl' | 'umol'>('mgdl');

    // -------------------------------------------------------------
    // BMI Calculator State
    // -------------------------------------------------------------
    const [bmiSystem, setBmiSystem] = useState<'metric' | 'imperial'>('metric');
    const [weightKg, setWeightKg] = useState<string>('68');
    const [heightCm, setHeightCm] = useState<string>('170');
    const [weightLbs, setWeightLbs] = useState<string>('150');
    const [heightFt, setHeightFt] = useState<string>('5');
    const [heightIn, setHeightIn] = useState<string>('8');

    // -------------------------------------------------------------
    // CKD Staging Tool State (KDIGO)
    // -------------------------------------------------------------
    const [ckdGStage, setCkdGStage] = useState<'G1' | 'G2' | 'G3a' | 'G3b' | 'G4' | 'G5'>('G2');
    const [ckdAStage, setCkdAStage] = useState<'A1' | 'A2' | 'A3'>('A1');

    // Accessible Unique IDs for inputs
    const egfrSexFemaleId = useId();
    const egfrSexMaleId = useId();
    const egfrAgeId = useId();
    const egfrScrId = useId();
    const egfrUnitId = useId();
    const bmiWeightKgId = useId();
    const bmiHeightCmId = useId();
    const bmiWeightLbsId = useId();
    const bmiHeightFtId = useId();
    const bmiHeightInId = useId();

    // -------------------------------------------------------------
    // eGFR Calculation (CKD-EPI 2021 Equation)
    // -------------------------------------------------------------
    const calculateEgfr = (): { egfr: number | null; stage: string; stageName: string; color: string; desc: string; advice: string } => {
        const scrNum = parseFloat(egfrCreatinine);
        if (isNaN(scrNum) || scrNum <= 0 || isNaN(egfrAge) || egfrAge <= 0) {
            return {
                egfr: null,
                stage: '--',
                stageName: 'Please enter valid values',
                color: 'slate',
                desc: 'Enter age and serum creatinine to compute eGFR.',
                advice: ''
            };
        }

        // Convert µmol/L to mg/dL if needed (1 mg/dL = 88.42 µmol/L)
        const scrMgDl = egfrUnit === 'umol' ? scrNum / 88.42 : scrNum;

        // CKD-EPI 2021 formula
        const isFemale = egfrSex === 'female';
        const kappa = isFemale ? 0.7 : 0.9;
        const alpha = isFemale ? -0.241 : -0.302;
        const sexMultiplier = isFemale ? 1.012 : 1.0;

        const scrOverKappa = scrMgDl / kappa;
        const minTerm = Math.pow(Math.min(scrOverKappa, 1), alpha);
        const maxTerm = Math.pow(Math.max(scrOverKappa, 1), -1.200);
        const ageTerm = Math.pow(0.9938, egfrAge);

        const egfrVal = Math.round(142 * minTerm * maxTerm * ageTerm * sexMultiplier);

        if (egfrVal >= 90) {
            return {
                egfr: egfrVal,
                stage: 'Stage G1',
                stageName: 'Normal or High Kidney Function',
                color: 'emerald',
                desc: 'Kidney filtration is within normal range. If you have known kidney disease, protein in urine, or diabetes, periodic monitoring is still recommended.',
                advice: 'Maintain healthy lifestyle, adequate hydration, and annual health checkups.'
            };
        } else if (egfrVal >= 60) {
            return {
                egfr: egfrVal,
                stage: 'Stage G2',
                stageName: 'Mildly Decreased Kidney Function',
                color: 'teal',
                desc: 'Filtration is mildly lower than typical youth baseline. Common with healthy physiological aging, but requires confirmation with a urine protein (uACR) test.',
                advice: 'Keep blood pressure and blood sugar strictly controlled. Re-check creatinine every 6–12 months.'
            };
        } else if (egfrVal >= 45) {
            return {
                egfr: egfrVal,
                stage: 'Stage G3a',
                stageName: 'Mild to Moderately Decreased',
                color: 'amber',
                desc: 'Noticeable reduction in renal filtration capacity. Usually represents early-to-moderate Chronic Kidney Disease (CKD).',
                advice: 'Nephrology consultation is strongly advised to prevent further decline and review nephrotoxic medications.'
            };
        } else if (egfrVal >= 30) {
            return {
                egfr: egfrVal,
                stage: 'Stage G3b',
                stageName: 'Moderately to Severely Decreased',
                color: 'orange',
                desc: 'Significant loss of kidney function. Patients may begin to experience subtle symptoms such as hypertension, anemia, or mild swelling.',
                advice: 'Requires active management by a Nephrologist, diet modifications, and monitoring of mineral & bone metabolism.'
            };
        } else if (egfrVal >= 15) {
            return {
                egfr: egfrVal,
                stage: 'Stage G4',
                stageName: 'Severely Decreased Kidney Function',
                color: 'rose',
                desc: 'Severe kidney impairment with high likelihood of progression to kidney failure if unaddressed.',
                advice: 'Comprehensive nephrological care required, including counseling on vascular access, diet, and renal replacement therapy preparation.'
            };
        } else {
            return {
                egfr: egfrVal,
                stage: 'Stage G5',
                stageName: 'Kidney Failure (ESRD)',
                color: 'red',
                desc: 'Kidneys have lost nearly all filtration ability. Accumulation of toxins, fluid retention, and electrolyte imbalances require urgent care.',
                advice: 'Urgent consultation with Dr. Sourav Sarkar for dialysis (hemodialysis / peritoneal dialysis) or kidney transplant evaluation.'
            };
        }
    };

    const egfrResult = calculateEgfr();

    // -------------------------------------------------------------
    // BMI Calculation
    // -------------------------------------------------------------
    const calculateBmi = (): { bmi: number | null; category: string; color: string; desc: string; healthyRange: string } => {
        let weightInKg = 0;
        let heightInMeters = 0;

        if (bmiSystem === 'metric') {
            const w = parseFloat(weightKg);
            const h = parseFloat(heightCm);
            if (isNaN(w) || w <= 0 || isNaN(h) || h <= 0) {
                return { bmi: null, category: '--', color: 'slate', desc: 'Enter weight and height to calculate BMI.', healthyRange: '' };
            }
            weightInKg = w;
            heightInMeters = h / 100;
        } else {
            const w = parseFloat(weightLbs);
            const ft = parseFloat(heightFt);
            const inch = parseFloat(heightIn || '0');
            if (isNaN(w) || w <= 0 || isNaN(ft) || ft <= 0) {
                return { bmi: null, category: '--', color: 'slate', desc: 'Enter weight and height to calculate BMI.', healthyRange: '' };
            }
            weightInKg = w * 0.453592;
            const totalInches = (ft * 12) + (isNaN(inch) ? 0 : inch);
            heightInMeters = totalInches * 0.0254;
        }

        if (heightInMeters <= 0) {
            return { bmi: null, category: '--', color: 'slate', desc: 'Invalid height.', healthyRange: '' };
        }

        const bmiVal = Math.round((weightInKg / (heightInMeters * heightInMeters)) * 10) / 10;
        const minHealthyKg = Math.round(18.5 * heightInMeters * heightInMeters);
        const maxHealthyKg = Math.round(24.9 * heightInMeters * heightInMeters);

        const healthyStr = bmiSystem === 'metric'
            ? `${minHealthyKg} kg – ${maxHealthyKg} kg`
            : `${Math.round(minHealthyKg * 2.20462)} lbs – ${Math.round(maxHealthyKg * 2.20462)} lbs`;

        if (bmiVal < 18.5) {
            return {
                bmi: bmiVal,
                category: 'Underweight',
                color: 'sky',
                desc: 'Below optimal body weight. May increase vulnerability to malnutrition and frailty in chronic medical illness.',
                healthyRange: healthyStr
            };
        } else if (bmiVal < 25.0) {
            return {
                bmi: bmiVal,
                category: 'Normal / Healthy Weight',
                color: 'emerald',
                desc: 'Optimal body mass index. Promotes healthy renal hemodynamics and cardiovascular health.',
                healthyRange: healthyStr
            };
        } else if (bmiVal < 30.0) {
            return {
                bmi: bmiVal,
                category: 'Overweight',
                color: 'amber',
                desc: 'Above standard weight. In South Asian / Indian populations, metabolic risk & diabetic nephropathy risk rises at BMI > 23 kg/m².',
                healthyRange: healthyStr
            };
        } else if (bmiVal < 35.0) {
            return {
                bmi: bmiVal,
                category: 'Obesity Class I',
                color: 'orange',
                desc: 'Increases glomerular capillary workload (hyperfiltration) and is a prominent contributor to hypertension and diabetic kidney damage.',
                healthyRange: healthyStr
            };
        } else {
            return {
                bmi: bmiVal,
                category: 'Obesity Class II+ (Severe)',
                color: 'red',
                desc: 'Strongly correlated with obesity-related glomerulopathy, proteinuria, and accelerated loss of kidney function.',
                healthyRange: healthyStr
            };
        }
    };

    const bmiResult = calculateBmi();

    // -------------------------------------------------------------
    // KDIGO CKD Staging Matrix Lookup
    // -------------------------------------------------------------
    // Risk Matrix definition:
    // Green (Low risk), Yellow (Moderately increased), Orange (High risk), Red (Very high risk)
    const kdigoMatrix: Record<string, Record<string, { risk: 'low' | 'moderate' | 'high' | 'very-high'; label: string; frequency: string }>> = {
        G1: {
            A1: { risk: 'low', label: 'Low Risk', frequency: 'Monitor once per year if CKD is suspected' },
            A2: { risk: 'moderate', label: 'Moderately Increased Risk', frequency: 'Monitor 1 time per year' },
            A3: { risk: 'high', label: 'High Risk', frequency: 'Monitor 2 times per year' },
        },
        G2: {
            A1: { risk: 'low', label: 'Low Risk', frequency: 'Monitor once per year if CKD is suspected' },
            A2: { risk: 'moderate', label: 'Moderately Increased Risk', frequency: 'Monitor 1 time per year' },
            A3: { risk: 'high', label: 'High Risk', frequency: 'Monitor 2 times per year' },
        },
        G3a: {
            A1: { risk: 'moderate', label: 'Moderately Increased Risk', frequency: 'Monitor 1 time per year' },
            A2: { risk: 'high', label: 'High Risk', frequency: 'Monitor 2 times per year' },
            A3: { risk: 'very-high', label: 'Very High Risk', frequency: 'Monitor 3+ times per year' },
        },
        G3b: {
            A1: { risk: 'high', label: 'High Risk', frequency: 'Monitor 2 times per year' },
            A2: { risk: 'very-high', label: 'Very High Risk', frequency: 'Monitor 3 times per year' },
            A3: { risk: 'very-high', label: 'Very High Risk', frequency: 'Monitor 3+ times per year' },
        },
        G4: {
            A1: { risk: 'very-high', label: 'Very High Risk', frequency: 'Monitor 3–4 times per year' },
            A2: { risk: 'very-high', label: 'Very High Risk', frequency: 'Monitor 3–4 times per year' },
            A3: { risk: 'very-high', label: 'Very High Risk', frequency: 'Monitor 4+ times per year' },
        },
        G5: {
            A1: { risk: 'very-high', label: 'Very High Risk (Kidney Failure)', frequency: 'Continuous active nephrological management' },
            A2: { risk: 'very-high', label: 'Very High Risk (Kidney Failure)', frequency: 'Continuous active nephrological management' },
            A3: { risk: 'very-high', label: 'Very High Risk (Kidney Failure)', frequency: 'Continuous active nephrological management' },
        },
    };

    const currentKdigo = kdigoMatrix[ckdGStage]?.[ckdAStage] || {
        risk: 'low',
        label: 'Low Risk',
        frequency: 'Annual monitoring'
    };

    const gStageMeta: Record<string, { name: string; range: string; desc: string }> = {
        G1: { name: 'Normal or High', range: '≥ 90 mL/min', desc: 'Normal filtration; check for albuminuria or structural disease' },
        G2: { name: 'Mildly Decreased', range: '60–89 mL/min', desc: 'Mild decline relative to young adult baseline' },
        G3a: { name: 'Mild to Moderately Decreased', range: '45–59 mL/min', desc: 'Early clinically significant impairment' },
        G3b: { name: 'Moderately to Severely Decreased', range: '30–44 mL/min', desc: 'Moderate loss; risk of metabolic complications' },
        G4: { name: 'Severely Decreased', range: '15–29 mL/min', desc: 'Severe reduction; vascular planning & RRT discussion' },
        G5: { name: 'Kidney Failure (ESRD)', range: '< 15 mL/min', desc: 'End-stage kidney disease; dialysis or transplant evaluation' },
    };

    const aStageMeta: Record<string, { name: string; range: string; desc: string }> = {
        A1: { name: 'Normal to Mildly Increased', range: '< 30 mg/g (< 3 mg/mmol)', desc: 'Optimal urinary albumin' },
        A2: { name: 'Moderately Increased (Microalbuminuria)', range: '30–300 mg/g (3–30 mg/mmol)', desc: 'Early marker of glomerular vessel leak' },
        A3: { name: 'Severely Increased (Macroalbuminuria)', range: '> 300 mg/g (> 30 mg/mmol)', desc: 'Significant protein loss & accelerated renal progression' },
    };

    const getRiskColor = (risk: 'low' | 'moderate' | 'high' | 'very-high') => {
        switch (risk) {
            case 'low':
                return {
                    badge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
                    card: 'bg-emerald-50 border-emerald-200 text-emerald-950',
                    dot: 'bg-emerald-500'
                };
            case 'moderate':
                return {
                    badge: 'bg-yellow-100 text-yellow-800 border-yellow-300',
                    card: 'bg-yellow-50 border-yellow-200 text-yellow-950',
                    dot: 'bg-yellow-500'
                };
            case 'high':
                return {
                    badge: 'bg-orange-100 text-orange-800 border-orange-300',
                    card: 'bg-orange-50 border-orange-200 text-orange-950',
                    dot: 'bg-orange-500'
                };
            case 'very-high':
                return {
                    badge: 'bg-red-100 text-red-800 border-red-300',
                    card: 'bg-red-50 border-red-200 text-red-950',
                    dot: 'bg-red-600'
                };
        }
    };

    const riskColor = getRiskColor(currentKdigo.risk);

    return (
        <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                {/* Section Header */}
                <div className="text-center space-y-3">
                    <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
                        Evidence-Based Clinical Calculators
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                        Kidney Health Calculators & Tools
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Assess your kidney function, estimate Body Mass Index (BMI), and understand KDIGO Chronic Kidney Disease staging with guidelines curated by Dr. Sourav Sarkar.
                    </p>
                </div>

                {/* Sub-Tab Navigation Switcher */}
                <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-1.5 max-w-2xl mx-auto">
                    <button
                        type="button"
                        onClick={() => setActiveTab('egfr')}
                        className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${activeTab === 'egfr'
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        <span>eGFR (CKD-EPI 2021)</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab('bmi')}
                        className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${activeTab === 'bmi'
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        <span>BMI Calculator</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab('ckd')}
                        className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${activeTab === 'ckd'
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span>CKD Staging (KDIGO)</span>
                    </button>
                </div>

                {/* ========================================================= */}
                {/* TAB 1: eGFR CALCULATOR */}
                {/* ========================================================= */}
                {activeTab === 'egfr' && (
                    <ScrollReveal>
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
                            <div className="border-b border-slate-100 pb-5">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                                            Estimated Glomerular Filtration Rate (eGFR)
                                        </h2>
                                        <p className="text-slate-500 text-xs sm:text-sm mt-1">
                                            Based on the official <strong>CKD-EPI (2021)</strong> Creatinine Equation recommended by KDIGO & NKF (Race-free).
                                        </p>
                                    </div>
                                    <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200">
                                        KDIGO 2021 Standard
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                {/* Left Side: Input Form */}
                                <div className="lg:col-span-6 space-y-6">

                                    {/* Biological Sex */}
                                    <div>
                                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                            Biological Sex
                                        </span>
                                        <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Biological Sex">
                                            <label
                                                htmlFor={egfrSexMaleId}
                                                className={`py-3 px-4 rounded-xl border-2 text-center text-sm font-bold cursor-pointer transition flex items-center justify-center gap-2 ${egfrSex === 'male'
                                                    ? 'border-blue-600 bg-blue-50/50 text-blue-700'
                                                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    id={egfrSexMaleId}
                                                    name="egfrSex"
                                                    value="male"
                                                    checked={egfrSex === 'male'}
                                                    onChange={() => setEgfrSex('male')}
                                                    className="sr-only"
                                                />
                                                <span>👨 Male</span>
                                            </label>

                                            <label
                                                htmlFor={egfrSexFemaleId}
                                                className={`py-3 px-4 rounded-xl border-2 text-center text-sm font-bold cursor-pointer transition flex items-center justify-center gap-2 ${egfrSex === 'female'
                                                    ? 'border-blue-600 bg-blue-50/50 text-blue-700'
                                                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    id={egfrSexFemaleId}
                                                    name="egfrSex"
                                                    value="female"
                                                    checked={egfrSex === 'female'}
                                                    onChange={() => setEgfrSex('female')}
                                                    className="sr-only"
                                                />
                                                <span>👩 Female</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Age Input */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label htmlFor={egfrAgeId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                                Age (Years)
                                            </label>
                                            <span className="text-xs font-semibold text-blue-600">{egfrAge} years old</span>
                                        </div>
                                        <input
                                            id={egfrAgeId}
                                            type="number"
                                            min={18}
                                            max={110}
                                            value={egfrAge}
                                            onChange={(e) => setEgfrAge(parseInt(e.target.value) || 0)}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-slate-900 bg-slate-50/50"
                                            placeholder="e.g. 52"
                                        />
                                        <div className="flex gap-2 mt-2">
                                            {[30, 45, 60, 75].map((preset) => (
                                                <button
                                                    key={preset}
                                                    type="button"
                                                    onClick={() => setEgfrAge(preset)}
                                                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium transition"
                                                >
                                                    {preset} yrs
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Serum Creatinine Input & Unit Toggle */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label htmlFor={egfrScrId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                                Serum Creatinine
                                            </label>
                                            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg">
                                                <label htmlFor={egfrUnitId} className="sr-only">Creatinine Unit</label>
                                                <select
                                                    id={egfrUnitId}
                                                    value={egfrUnit}
                                                    onChange={(e) => setEgfrUnit(e.target.value as 'mgdl' | 'umol')}
                                                    className="text-xs font-bold bg-transparent border-none text-slate-700 focus:outline-none cursor-pointer px-1 py-0.5"
                                                >
                                                    <option value="mgdl">mg/dL (Standard)</option>
                                                    <option value="umol">µmol/L (SI Unit)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <input
                                                id={egfrScrId}
                                                type="number"
                                                step="0.05"
                                                min="0.1"
                                                max="25"
                                                value={egfrCreatinine}
                                                onChange={(e) => setEgfrCreatinine(e.target.value)}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-slate-900 bg-slate-50/50"
                                                placeholder={egfrUnit === 'mgdl' ? 'e.g. 1.2' : 'e.g. 106'}
                                            />
                                            <span className="absolute right-4 top-3.5 text-xs font-bold text-slate-400">
                                                {egfrUnit === 'mgdl' ? 'mg/dL' : 'µmol/L'}
                                            </span>
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            {(egfrUnit === 'mgdl' ? ['0.8', '1.1', '1.5', '2.2', '3.5'] : ['70', '97', '132', '194', '309']).map((val) => (
                                                <button
                                                    key={val}
                                                    type="button"
                                                    onClick={() => setEgfrCreatinine(val)}
                                                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium transition"
                                                >
                                                    {val}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Dynamic Result Card */}
                                <div className="lg:col-span-6 flex flex-col justify-between bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-2xl p-6 border border-slate-200 space-y-6">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold tracking-wider uppercase text-slate-500">
                                                Calculated eGFR
                                            </span>
                                            <span className="text-[11px] font-semibold text-blue-600 bg-blue-100/70 px-2 py-0.5 rounded-md">
                                                CKD-EPI 2021
                                            </span>
                                        </div>

                                        <div className="mt-4 flex items-baseline gap-2">
                                            <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
                                                {egfrResult.egfr !== null ? egfrResult.egfr : '--'}
                                            </span>
                                            <span className="text-slate-500 font-bold text-sm sm:text-base">
                                                mL/min/1.73 m²
                                            </span>
                                        </div>

                                        {/* Stage Badge */}
                                        <div className="mt-4">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-extrabold border ${egfrResult.stage.includes('G1')
                                                ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                                : egfrResult.stage.includes('G2')
                                                    ? 'bg-teal-100 text-teal-800 border-teal-300'
                                                    : egfrResult.stage.includes('G3a')
                                                        ? 'bg-amber-100 text-amber-800 border-amber-300'
                                                        : egfrResult.stage.includes('G3b')
                                                            ? 'bg-orange-100 text-orange-800 border-orange-300'
                                                            : egfrResult.stage.includes('G4')
                                                                ? 'bg-rose-100 text-rose-800 border-rose-300'
                                                                : 'bg-red-100 text-red-800 border-red-300'
                                                }`}>
                                                <span className="w-2 h-2 rounded-full bg-current"></span>
                                                {egfrResult.stage}: {egfrResult.stageName}
                                            </span>
                                        </div>

                                        {/* Clinical Meaning */}
                                        <div className="mt-4 space-y-2">
                                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                                                {egfrResult.desc}
                                            </p>
                                            {egfrResult.advice && (
                                                <div className="p-3 bg-white/80 rounded-xl border border-slate-200/80 text-xs text-slate-600 space-y-1">
                                                    <span className="font-bold text-slate-900 block">💡 Clinical Note:</span>
                                                    <span>{egfrResult.advice}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Action link */}
                                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                                        <span className="text-xs text-slate-500 font-medium">Need report evaluation?</span>
                                        <Link
                                            href="/contacts"
                                            className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                                        >
                                            Book Consultation with Dr. Sarkar →
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Reference Table for eGFR Staging */}
                            <div className="pt-6 border-t border-slate-200">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                                    Kidney Function Stages Reference (KDIGO Guidelines)
                                </h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
                                    <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl">
                                        <div className="font-extrabold text-emerald-800">Stage G1</div>
                                        <div className="text-emerald-700 font-semibold">≥ 90</div>
                                        <div className="text-[10px] text-emerald-600">Normal</div>
                                    </div>
                                    <div className="bg-teal-50 border border-teal-200 p-2.5 rounded-xl">
                                        <div className="font-extrabold text-teal-800">Stage G2</div>
                                        <div className="text-teal-700 font-semibold">60–89</div>
                                        <div className="text-[10px] text-teal-600">Mild drop</div>
                                    </div>
                                    <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl">
                                        <div className="font-extrabold text-amber-800">Stage G3a</div>
                                        <div className="text-amber-700 font-semibold">45–59</div>
                                        <div className="text-[10px] text-amber-600">Mild-Moderate</div>
                                    </div>
                                    <div className="bg-orange-50 border border-orange-200 p-2.5 rounded-xl">
                                        <div className="font-extrabold text-orange-800">Stage G3b</div>
                                        <div className="text-orange-700 font-semibold">30–44</div>
                                        <div className="text-[10px] text-orange-600">Moderate-Severe</div>
                                    </div>
                                    <div className="bg-rose-50 border border-rose-200 p-2.5 rounded-xl">
                                        <div className="font-extrabold text-rose-800">Stage G4</div>
                                        <div className="text-rose-700 font-semibold">15–29</div>
                                        <div className="text-[10px] text-rose-600">Severe</div>
                                    </div>
                                    <div className="bg-red-50 border border-red-200 p-2.5 rounded-xl">
                                        <div className="font-extrabold text-red-800">Stage G5</div>
                                        <div className="text-red-700 font-semibold">&lt; 15</div>
                                        <div className="text-[10px] text-red-600">Kidney Failure</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                )}

                {/* ========================================================= */}
                {/* TAB 2: BMI CALCULATOR */}
                {/* ========================================================= */}
                {activeTab === 'bmi' && (
                    <ScrollReveal>
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
                            <div className="border-b border-slate-100 pb-5">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                                            Body Mass Index (BMI) & Kidney Health
                                        </h2>
                                        <p className="text-slate-500 text-xs sm:text-sm mt-1">
                                            Calculate your BMI and understand its influence on kidney hyperfiltration, hypertension, and diabetic nephropathy.
                                        </p>
                                    </div>

                                    {/* Unit toggle buttons */}
                                    <div className="flex items-center bg-slate-100 p-1 rounded-xl">
                                        <button
                                            type="button"
                                            onClick={() => setBmiSystem('metric')}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${bmiSystem === 'metric'
                                                ? 'bg-white text-slate-900 shadow-sm'
                                                : 'text-slate-600 hover:text-slate-900'
                                                }`}
                                        >
                                            Metric (kg / cm)
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setBmiSystem('imperial')}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${bmiSystem === 'imperial'
                                                ? 'bg-white text-slate-900 shadow-sm'
                                                : 'text-slate-600 hover:text-slate-900'
                                                }`}
                                        >
                                            Imperial (lbs / ft-in)
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                {/* Left Side Inputs */}
                                <div className="lg:col-span-6 space-y-6">
                                    {bmiSystem === 'metric' ? (
                                        <>
                                            {/* Weight kg */}
                                            <div>
                                                <label htmlFor={bmiWeightKgId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                                    Weight (Kilograms)
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        id={bmiWeightKgId}
                                                        type="number"
                                                        step="0.5"
                                                        value={weightKg}
                                                        onChange={(e) => setWeightKg(e.target.value)}
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-slate-900 bg-slate-50/50"
                                                        placeholder="e.g. 70"
                                                    />
                                                    <span className="absolute right-4 top-3.5 text-xs font-bold text-slate-400">
                                                        kg
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Height cm */}
                                            <div>
                                                <label htmlFor={bmiHeightCmId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                                    Height (Centimeters)
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        id={bmiHeightCmId}
                                                        type="number"
                                                        step="1"
                                                        value={heightCm}
                                                        onChange={(e) => setHeightCm(e.target.value)}
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-slate-900 bg-slate-50/50"
                                                        placeholder="e.g. 172"
                                                    />
                                                    <span className="absolute right-4 top-3.5 text-xs font-bold text-slate-400">
                                                        cm
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Weight lbs */}
                                            <div>
                                                <label htmlFor={bmiWeightLbsId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                                    Weight (Pounds)
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        id={bmiWeightLbsId}
                                                        type="number"
                                                        step="1"
                                                        value={weightLbs}
                                                        onChange={(e) => setWeightLbs(e.target.value)}
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-slate-900 bg-slate-50/50"
                                                        placeholder="e.g. 155"
                                                    />
                                                    <span className="absolute right-4 top-3.5 text-xs font-bold text-slate-400">
                                                        lbs
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Height ft + in */}
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label htmlFor={bmiHeightFtId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                                        Height (Feet)
                                                    </label>
                                                    <input
                                                        id={bmiHeightFtId}
                                                        type="number"
                                                        value={heightFt}
                                                        onChange={(e) => setHeightFt(e.target.value)}
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-slate-900 bg-slate-50/50"
                                                        placeholder="5"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor={bmiHeightInId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                                        Height (Inches)
                                                    </label>
                                                    <input
                                                        id={bmiHeightInId}
                                                        type="number"
                                                        value={heightIn}
                                                        onChange={(e) => setHeightIn(e.target.value)}
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-slate-900 bg-slate-50/50"
                                                        placeholder="8"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* Renal insight on BMI */}
                                    <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100 text-xs text-slate-700 space-y-2">
                                        <div className="font-bold text-blue-900 flex items-center gap-1.5">
                                            <span>🩺 Why BMI is critical for Kidneys:</span>
                                        </div>
                                        <p className="leading-relaxed">
                                            Excess weight forces the kidneys to filter harder above baseline, causing <em>glomerular hyperfiltration</em>. Over years, this increases protein leakage and accelerates nephron loss, especially when accompanied by Diabetes or Hypertension.
                                        </p>
                                    </div>
                                </div>

                                {/* Right Side Result */}
                                <div className="lg:col-span-6 flex flex-col justify-between bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-2xl p-6 border border-slate-200 space-y-6">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold tracking-wider uppercase text-slate-500">
                                                Calculated BMI
                                            </span>
                                            <span className="text-[11px] font-semibold text-blue-600 bg-blue-100/70 px-2 py-0.5 rounded-md">
                                                WHO Standard
                                            </span>
                                        </div>

                                        <div className="mt-4 flex items-baseline gap-2">
                                            <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
                                                {bmiResult.bmi !== null ? bmiResult.bmi : '--'}
                                            </span>
                                            <span className="text-slate-500 font-bold text-sm sm:text-base">
                                                kg/m²
                                            </span>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="mt-4">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-extrabold border ${bmiResult.category.includes('Normal')
                                                ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                                : bmiResult.category.includes('Underweight')
                                                    ? 'bg-sky-100 text-sky-800 border-sky-300'
                                                    : bmiResult.category.includes('Overweight')
                                                        ? 'bg-amber-100 text-amber-800 border-amber-300'
                                                        : bmiResult.category.includes('Class I')
                                                            ? 'bg-orange-100 text-orange-800 border-orange-300'
                                                            : 'bg-red-100 text-red-800 border-red-300'
                                                }`}>
                                                <span className="w-2 h-2 rounded-full bg-current"></span>
                                                {bmiResult.category}
                                            </span>
                                        </div>

                                        {/* Description & Target */}
                                        <div className="mt-4 space-y-3">
                                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                                                {bmiResult.desc}
                                            </p>

                                            {bmiResult.healthyRange && (
                                                <div className="p-3 bg-white/80 rounded-xl border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between">
                                                    <span className="font-bold text-slate-800">Ideal weight for your height:</span>
                                                    <span className="font-extrabold text-blue-600">{bmiResult.healthyRange}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* South Asian Context Alert */}
                                    <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                                        <span className="font-bold flex items-center gap-1">
                                            ⚠️ South Asian / Indian Population Guideline:
                                        </span>
                                        <p className="text-[11px] leading-relaxed text-amber-800">
                                            Due to higher visceral fat percentage, WHO recommends lower thresholds for South Asians: <strong>Overweight ≥ 23 kg/m²</strong> and <strong>Obese ≥ 25 kg/m²</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* BMI Reference Scale */}
                            <div className="pt-6 border-t border-slate-200">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                                    Standard BMI Categories
                                </h4>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                                    <div className="bg-sky-50 border border-sky-200 p-2.5 rounded-xl">
                                        <div className="font-bold text-sky-800">&lt; 18.5</div>
                                        <div className="text-[11px] text-sky-600">Underweight</div>
                                    </div>
                                    <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl">
                                        <div className="font-bold text-emerald-800">18.5 – 24.9</div>
                                        <div className="text-[11px] text-emerald-600">Healthy / Normal</div>
                                    </div>
                                    <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl">
                                        <div className="font-bold text-amber-800">25.0 – 29.9</div>
                                        <div className="text-[11px] text-amber-600">Overweight</div>
                                    </div>
                                    <div className="bg-rose-50 border border-rose-200 p-2.5 rounded-xl">
                                        <div className="font-bold text-rose-800">≥ 30.0</div>
                                        <div className="text-[11px] text-rose-600">Obese (Classes I–III)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                )}

                {/* ========================================================= */}
                {/* TAB 3: CKD STAGING TOOL (KDIGO MATRIX) */}
                {/* ========================================================= */}
                {activeTab === 'ckd' && (
                    <ScrollReveal>
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
                            <div className="border-b border-slate-100 pb-5">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                                            KDIGO CKD Staging & Prognosis Heatmap
                                        </h2>
                                        <p className="text-slate-500 text-xs sm:text-sm mt-1">
                                            International standard for staging Chronic Kidney Disease combining <strong>eGFR Stage (G1–G5)</strong> and <strong>Persistent Albuminuria (A1–A3)</strong>.
                                        </p>
                                    </div>
                                    <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200">
                                        KDIGO Clinical Matrix
                                    </span>
                                </div>
                            </div>

                            {/* Selectors */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* GFR Stage Selector */}
                                <div className="space-y-3">
                                    <label htmlFor="ckdGStageSelect" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                                        1. Select GFR Stage (Filtration Capacity)
                                    </label>
                                    <select
                                        id="ckdGStageSelect"
                                        value={ckdGStage}
                                        onChange={(e) => setCkdGStage(e.target.value as GStage)}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-900 bg-slate-50 cursor-pointer text-sm"
                                    >
                                        <option value="G1">G1: Normal or high (≥ 90 mL/min)</option>
                                        <option value="G2">G2: Mildly decreased (60–89 mL/min)</option>
                                        <option value="G3a">G3a: Mild to moderately decreased (45–59 mL/min)</option>
                                        <option value="G3b">G3b: Moderately to severely decreased (30–44 mL/min)</option>
                                        <option value="G4">G4: Severely decreased (15–29 mL/min)</option>
                                        <option value="G5">G5: Kidney failure (&lt; 15 mL/min)</option>
                                    </select>
                                    <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <span className="font-bold text-slate-700">{gStageMeta[ckdGStage].name}</span>: {gStageMeta[ckdGStage].desc}
                                    </div>
                                </div>

                                {/* Albuminuria Stage Selector */}
                                <div className="space-y-3">
                                    <label htmlFor="ckdAStageSelect" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                                        2. Select Albuminuria Stage (Protein in Urine)
                                    </label>
                                    <select
                                        id="ckdAStageSelect"
                                        value={ckdAStage}
                                        onChange={(e) => setCkdAStage(e.target.value as AStage)}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-900 bg-slate-50 cursor-pointer text-sm"
                                    >
                                        <option value="A1">A1: Normal to mildly increased (&lt; 30 mg/g uACR)</option>
                                        <option value="A2">A2: Moderately increased (30–300 mg/g uACR)</option>
                                        <option value="A3">A3: Severely increased (&gt; 300 mg/g uACR)</option>
                                    </select>
                                    <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <span className="font-bold text-slate-700">{aStageMeta[ckdAStage].name}</span>: {aStageMeta[ckdAStage].desc}
                                    </div>
                                </div>
                            </div>

                            {/* Risk Evaluation Result Card */}
                            <div className={`p-6 rounded-2xl border ${riskColor.card} space-y-4`}>
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-3 h-3 rounded-full ${riskColor.dot}`}></span>
                                        <h3 className="font-extrabold text-base sm:text-lg">
                                            Stage {ckdGStage}{ckdAStage}: {currentKdigo.label}
                                        </h3>
                                    </div>
                                    <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${riskColor.badge}`}>
                                        KDIGO Classification
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                                    <div className="bg-white/70 p-3.5 rounded-xl border border-slate-200/60">
                                        <span className="font-bold text-slate-900 block mb-1">Recommended Monitoring Frequency:</span>
                                        <span className="text-slate-700 font-medium">{currentKdigo.frequency}</span>
                                    </div>
                                    <div className="bg-white/70 p-3.5 rounded-xl border border-slate-200/60">
                                        <span className="font-bold text-slate-900 block mb-1">Specialist Consultation Recommendation:</span>
                                        <span className="text-slate-700 font-medium">
                                            {currentKdigo.risk === 'low'
                                                ? 'Routine primary physician assessment; review if high blood pressure or diabetes occurs.'
                                                : currentKdigo.risk === 'moderate'
                                                    ? 'Nephrology consultation advised for early renal protection and strict BP target setting.'
                                                    : 'Formal nephrologist evaluation strongly indicated. Dietary counseling and medication review required.'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Interactive KDIGO Visual Matrix Grid */}
                            <div className="space-y-3">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                    Interactive KDIGO 2D Risk Grid (Click any cell to inspect)
                                </h4>
                                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                                    <table className="w-full text-xs text-left border-collapse">
                                        <thead>
                                            <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                                                <th className="p-3 font-bold border-r border-slate-200 min-w-[130px]">
                                                    GFR Stage
                                                </th>
                                                <th className="p-3 font-bold border-r border-slate-200 min-w-[140px] text-center">
                                                    A1 (Normal/Mild)<br />
                                                    <span className="text-[10px] font-normal text-slate-500">&lt; 30 mg/g</span>
                                                </th>
                                                <th className="p-3 font-bold border-r border-slate-200 min-w-[140px] text-center">
                                                    A2 (Moderate)<br />
                                                    <span className="text-[10px] font-normal text-slate-500">30–300 mg/g</span>
                                                </th>
                                                <th className="p-3 font-bold min-w-[140px] text-center">
                                                    A3 (Severe)<br />
                                                    <span className="text-[10px] font-normal text-slate-500">&gt; 300 mg/g</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(['G1', 'G2', 'G3a', 'G3b', 'G4', 'G5'] as const).map((g) => (
                                                <tr key={g} className="border-b border-slate-200">
                                                    <td className="p-3 font-bold bg-slate-50 border-r border-slate-200 text-slate-800">
                                                        <div>{g}</div>
                                                        <div className="text-[10px] font-normal text-slate-500">{gStageMeta[g].range}</div>
                                                    </td>
                                                    {(['A1', 'A2', 'A3'] as const).map((a) => {
                                                        const cell = kdigoMatrix[g][a];
                                                        const isSelected = ckdGStage === g && ckdAStage === a;

                                                        let bgStyle = '';
                                                        if (cell.risk === 'low') bgStyle = 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100';
                                                        else if (cell.risk === 'moderate') bgStyle = 'bg-yellow-50 text-yellow-800 hover:bg-yellow-100';
                                                        else if (cell.risk === 'high') bgStyle = 'bg-orange-50 text-orange-800 hover:bg-orange-100';
                                                        else bgStyle = 'bg-red-50 text-red-800 hover:bg-red-100';

                                                        return (
                                                            <td
                                                                key={a}
                                                                onClick={() => {
                                                                    setCkdGStage(g);
                                                                    setCkdAStage(a);
                                                                }}
                                                                className={`p-3 text-center cursor-pointer transition border-r last:border-r-0 border-slate-200 font-semibold ${bgStyle} ${isSelected
                                                                    ? 'ring-2 ring-blue-600 ring-inset shadow-md font-extrabold scale-[1.02]'
                                                                    : ''
                                                                    }`}
                                                            >
                                                                <div className="flex items-center justify-center gap-1">
                                                                    {isSelected && <span>✓</span>}
                                                                    <span>{cell.label}</span>
                                                                </div>
                                                            </td>
                                                        );
                                                    })}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                )}

                {/* ========================================================= */}
                {/* MEDICAL DISCLAIMER & DOCTOR CONSULTATION CTA */}
                {/* ========================================================= */}
                <ScrollReveal>
                    <div className="bg-amber-50/70 rounded-2xl border border-amber-200 p-5 sm:p-6 space-y-3 text-amber-950">
                        <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-amber-900">
                            <svg className="w-5 h-5 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span>Important Clinical Disclaimer</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-amber-800">
                            These calculators provide estimates based on international medical guidelines (CKD-EPI 2021, KDIGO, WHO) and are intended for <strong>educational and informational screening purposes only</strong>. Clinical factors such as acute illness, muscle mass variations, amputations, medications, and severe dehydration can alter serum creatinine. These tools do not replace formal diagnosis by a registered nephrologist.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Consultation Card */}
                <ScrollReveal>
                    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 text-center md:text-left">
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                                Expert Nephrology Guidance
                            </span>
                            <h3 className="text-xl sm:text-2xl font-extrabold">
                                Have an abnormal lab report or declining eGFR?
                            </h3>
                            <p className="text-blue-100 text-xs sm:text-sm max-w-xl">
                                Consult with Dr. Sourav Sarkar (DM Nephrology, MD Medicine, Gold Medalist) for comprehensive kidney disease management, dialysis planning, and personalized treatment.
                            </p>
                        </div>
                        <Link
                            href="/contacts"
                            className="bg-white hover:bg-blue-50 text-blue-900 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition transform active:scale-95 whitespace-nowrap flex-shrink-0"
                        >
                            Book an Appointment
                        </Link>
                    </div>
                </ScrollReveal>

            </div>
        </div>
    );
}
