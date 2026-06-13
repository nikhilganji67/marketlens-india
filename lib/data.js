export const MARKET = {
  nifty: { val: 24762, chg: 0.82 },
  sensex: { val: 81403, chg: 0.76 },
  midcap: { val: 18341, chg: -0.21 },
  vix: { val: 13.4, avg: 18.2 },
  spCorr: 0.71,
  sp500: { val: 5432, chg: 0.34 },
};

export const SECTORS = [
  { name: 'IT', chg: 6.2, pe: 28, peg: 1.4, fii: 14200, signal: 'BUY', note: 'Breakout forming' },
  { name: 'Pharma', chg: 4.8, pe: 22, peg: 0.8, fii: 9800, signal: 'BUY', note: 'Bottom formed' },
  { name: 'FMCG', chg: 3.1, pe: 46, peg: 2.1, fii: 4100, signal: 'HOLD', note: 'Defensive play' },
  { name: 'Private Banks', chg: 2.4, pe: 14, peg: 0.9, fii: 7100, signal: 'BUY', note: 'Value zone' },
  { name: 'Auto', chg: 1.4, pe: 19, peg: 1.1, fii: -1200, signal: 'HOLD', note: 'Watch support' },
  { name: 'Capital Goods', chg: 0.8, pe: 38, peg: 1.8, fii: 2200, signal: 'HOLD', note: 'Premium priced' },
  { name: 'PSU Banks', chg: -1.1, pe: 9, peg: 0.7, fii: -3100, signal: 'HOLD', note: 'FII selling' },
  { name: 'Metals', chg: -2.8, pe: 9, peg: 0.6, fii: -3400, signal: 'WATCH', note: 'China risk' },
  { name: 'Realty', chg: -4.3, pe: 52, peg: 3.1, fii: -5200, signal: 'SELL', note: 'Peak signals' },
  { name: 'Telecom', chg: -1.9, pe: 31, peg: 2.2, fii: -800, signal: 'HOLD', note: 'ARPU watch' },
];

export const FII_TODAY = { fii: 2841, dii: -1204 };

export const BULK_DEALS = [
  { buyer: 'Govt Pension Fund Global', stock: 'INFY', qty: '8.2L', val: 1840, side: 'BUY' },
  { buyer: 'Invesco Asset Mgmt', stock: 'HDFCBANK', qty: '12.1L', val: 2100, side: 'BUY' },
  { buyer: 'BlackRock', stock: 'SUNPHARMA', qty: '5.4L', val: 1020, side: 'BUY' },
  { buyer: 'Morgan Stanley', stock: 'DLF', qty: '9.8L', val: 870, side: 'SELL' },
  { buyer: 'ICICI Pru MF', stock: 'RELIANCE', qty: '3.1L', val: 920, side: 'BUY' },
];

export const EARNINGS = [
  { co: 'Infosys Q4', result: 'PAT ₹6,368 cr', vs: 'est ₹6,180 cr', signal: 'BEAT', guidance: 'Raised to 4.5–7% growth' },
  { co: 'Wipro Q4', result: 'Rev $2.63B', vs: 'est $2.71B', signal: 'MISS', guidance: 'Missed 1–3% guidance' },
  { co: 'Sun Pharma Q4', result: 'PAT ₹2,811 cr', vs: 'est ₹2,740 cr', signal: 'BEAT', guidance: 'US generic pipeline strong' },
  { co: 'Tata Motors Q4', result: 'PAT ₹17,407 cr', vs: 'est ₹19,200 cr', signal: 'MISS', guidance: 'JLR volumes below guidance' },
  { co: 'HDFC Bank Q4', result: 'NII ₹29,077 cr', vs: 'est ₹29,100 cr', signal: 'INLINE', guidance: 'NIM at 3.5%, stable' },
  { co: 'Asian Paints Q4', result: 'PAT ₹1,170 cr', vs: 'est ₹1,320 cr', signal: 'MISS', guidance: 'Volume growth missed 8% target' },
  { co: "Divi's Labs Q4", result: 'PAT ₹530 cr', vs: 'est ₹480 cr', signal: 'BEAT', guidance: 'Raised FY26 margin guidance' },
];

export const MIDCAP = [
  { name: 'Gabriel India', mcap: 3200, sector: 'Auto Ancillary', pe: 18, peg: 0.7, signal: 'TURNAROUND', note: 'New EV platform wins, FII entry', fii: 'Accumulating' },
  { name: 'Aarti Drugs', mcap: 4800, sector: 'Pharma API', pe: 14, peg: 0.6, signal: 'BOTTOM', note: 'API export recovery, margin expansion', fii: 'Buying' },
  { name: 'Praj Industries', mcap: 6100, sector: 'Green Energy', pe: 28, peg: 1.2, signal: 'WATCH', note: 'Ethanol policy tailwind', fii: 'Neutral' },
  { name: 'MTAR Technologies', mcap: 3900, sector: 'Defence/Space', pe: 45, peg: 1.8, signal: 'BUY', note: 'ISRO & nuclear order book ₹800cr', fii: 'Strong buy' },
  { name: 'Syrma SGS Tech', mcap: 4200, sector: 'Electronics Mfg', pe: 32, peg: 1.1, signal: 'TURNAROUND', note: 'PLI beneficiary, EMS demand surge', fii: 'Buying' },
  { name: 'Thyrocare Tech', mcap: 2700, sector: 'Diagnostics', pe: 21, peg: 0.9, signal: 'BOTTOM', note: 'Consolidation done, margin recovery', fii: 'Accumulating' },
  { name: 'Tanla Platforms', mcap: 3600, sector: 'CPaaS/Tech', pe: 12, peg: 0.5, signal: 'VALUE', note: 'Cash rich, buyback signals', fii: 'Watching' },
];

export const EM_MARKETS = [
  { flag: '🇧🇷', name: 'Brazil IBOV', val: 128400, chg: 1.2, signal: 'ACCUMULATE', note: 'Rate cut cycle, commodity upswing' },
  { flag: '🇻🇳', name: 'Vietnam VN30', val: 1248, chg: 0.8, signal: 'BOTTOM', note: 'Double bottom, FDI manufacturing inflow' },
  { flag: '🇮🇩', name: 'Indonesia IDX', val: 7320, chg: 0.3, signal: 'WATCH', note: 'Election done, policy clarity ahead' },
  { flag: '🇰🇷', name: 'Korea KOSPI', val: 2780, chg: -0.4, signal: 'WATCH', note: 'Semi recovery, but USD/KRW headwind' },
  { flag: '🇲🇽', name: 'Mexico IPC', val: 52100, chg: 1.1, signal: 'ACCUMULATE', note: 'Nearshoring boom, US proximity premium' },
  { flag: '🇨🇳', name: 'China CSI 300', val: 3610, chg: -0.8, signal: 'CAUTION', note: 'Property drag persists, stimulus tepid' },
  { flag: '🇹🇭', name: 'Thailand SET', val: 1380, chg: -0.6, signal: 'HOLD', note: 'Tourism recovery stalling' },
];

export const PORTFOLIO = [
  { stock: 'HDFCBANK', qty: 50, avg: 1480, ltp: 1720, signal: 'HOLD', alert: 'FII accumulating. Hold with trailing SL at ₹1,620.' },
  { stock: 'WIPRO', qty: 100, avg: 480, ltp: 442, signal: 'REVIEW', alert: 'Q4 miss + guidance miss. Re-evaluate thesis.' },
  { stock: 'DLF', qty: 30, avg: 720, ltp: 890, signal: 'ALERT', alert: 'Realty sector at PE 52x — peak signal. Consider partial exit.' },
  { stock: 'SUNPHARMA', qty: 40, avg: 1150, ltp: 1610, signal: 'HOLD', alert: 'Strong Q4, guidance raised. Hold.' },
  { stock: 'TATAMOTORS', qty: 25, avg: 880, ltp: 1020, signal: 'WATCH', alert: 'JLR miss guidance. Watch next quarter commentary.' },
];

export const NEWS = [
  { time: '12m', headline: 'Nifty IT index up 1.4% as FIIs log ₹1,200 cr buy in morning session', stocks: ['INFY', 'TCS', 'HCLTECH'] },
  { time: '38m', headline: 'RBI holds repo at 6.5%; dovish tone signals possible Aug cut', stocks: ['HDFCBANK', 'SBIN', 'ICICIBANK'] },
  { time: '1h', headline: 'Sun Pharma gets USFDA nod for key dermatology drug', stocks: ['SUNPHARMA'] },
  { time: '1.5h', headline: 'Metals sector under pressure as China PMI disappoints at 48.8', stocks: ['TATASTEEL', 'HINDALCO', 'JSWSTEEL'] },
  { time: '2h', headline: 'Vietnam market forming double bottom — foreign funds rotate to EM frontier', stocks: [] },
  { time: '2.5h', headline: 'DLF Q4 bookings miss ₹4,500 cr guidance, actual at ₹3,800 cr', stocks: ['DLF', 'GODREJPROP'] },
  { time: '3h', headline: 'MTAR Technologies bags ₹320 cr ISRO order — third consecutive win', stocks: ['MTAR'] },
];
