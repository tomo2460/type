// Chemistry Basics Chapter 1 & 2 Question Database (For Typing Mode)
const database = [
    // --- 物質の構成 / Composition of Matter ---
    // 1. Classification of Matter
    { category: 'term', question: "1種類の元素からなる物質", answer: "単体", reading: "タンタイ" },
    { category: 'term', question: "2種類以上の元素からなる物質", answer: "化合物", reading: "カゴウブツ" },
    { category: 'term', question: "単体と化合物からなる物質全体", answer: "純物質", reading: "ジュンブッシツ" },
    { category: 'term', question: "2種類以上の純物質が混ざり合ったもの", answer: "混合物", reading: "コンゴウブツ" },

    // 2. Separation Methods
    { category: 'term', question: "液体を加熱して沸騰させ、蒸気を冷却して分離する操作", answer: "蒸留", reading: "ジョウリュウ" },
    { category: 'term', question: "液体に溶けにくい固体をろ紙などを使って分離する操作", answer: "ろ過", reading: "ロカ" },
    { category: 'term', question: "温度による溶解度の差を利用して結晶として取り出す操作", answer: "再結晶", reading: "サイケッショウ" },
    { category: 'term', question: "昇華しやすい物質を混合物から分離する操作（ヨウ素など）", answer: "昇華法", reading: "ショウカホウ" },
    { category: 'term', question: "沸点の差を利用して液体の混合物を分離する操作（石油など）", answer: "分留", reading: "ブンリュウ" },
    { category: 'term', question: "特定の成分を溶媒に溶かし出して分離する操作", answer: "抽出", reading: "チュウシュツ" },
    { category: 'term', question: "ろ紙や吸着剤への吸着力の差を利用して分離する操作", answer: "クロマトグラフィー", reading: "クロマトグラフィー" },

    // 3. States of Matter
    { category: 'term', question: "物質が三態（固体・液体・気体）の間で変化すること", answer: "状態変化", reading: "ジョウタイヘンカ" },
    { category: 'term', question: "気体分子が熱運動によって空間全体に広がる現象", answer: "拡散", reading: "カクサン" },
    { category: 'term', question: "構成粒子が規則正しく配列している固体", answer: "結晶", reading: "ケッショウ" },
    { category: 'term', question: "固体から直接気体になる変化", answer: "昇華", reading: "ショウカ" },
    { category: 'term', question: "気体から直接固体になる変化", answer: "凝華", reading: "ギョウカ" },
    { category: 'term', question: "絶対零度を基準とした温度目盛り", answer: "絶対温度", reading: "ゼッタイオンド" },

    // 4. Allotropes (SCOP)
    { category: 'term', question: "同じ元素の単体で性質が異なるもの", answer: "同素体", reading: "ドウソタイ" },
    { category: 'term', question: "硫黄の同素体：斜方硫黄、単斜硫黄ともう一つ", answer: "ゴム状硫黄", reading: "ゴムジョウイオウ" },
    { category: 'term', question: "炭素の同素体：ダイヤモンド、黒鉛ともう一つ", answer: "フラーレン", reading: "フラーレン" },
    { category: 'term', question: "酸素の同素体：酸素ともう一つ", answer: "オゾン", reading: "オゾン" },
    { category: 'term', question: "リンの同素体：黄リンともう一つ", answer: "赤リン", reading: "セキリン" },

    // 5. Atomic Structure
    { category: 'term', question: "物質を構成する最小の粒子", answer: "原子", reading: "ゲンシ" },
    { category: 'term', question: "原子の中心にある正の電荷を持つ粒子", answer: "陽子", reading: "ヨウシ" },
    { category: 'term', question: "原子の中心にあり電荷を持たない粒子", answer: "中性子", reading: "チュウセイシ" },
    { category: 'term', question: "陽子と中性子からなる原子の中心部分", answer: "原子核", reading: "ゲンシカク" },
    { category: 'term', question: "原子核の周りを回る負の電荷を持つ粒子", answer: "電子", reading: "デンシ" },
    { category: 'term', question: "陽子の数と等しいもの（元素のID）", answer: "原子番号", reading: "ゲンシバンゴウ" },
    { category: 'term', question: "陽子の数と中性子の数の和", answer: "質量数", reading: "シツリョウスウ" },
    { category: 'term', question: "原子番号が同じで質量数が異なる原子同士", answer: "同位体", reading: "ドウイタイ" },
    { category: 'term', question: "壊変して放射線を出す同位体", answer: "放射性同位体", reading: "ホウシャセイドウイタイ" },
    { category: 'term', question: "放射性同位体が半分になるまでの時間", answer: "半減期", reading: "ハンゲンキ" },

    // 6. Electron Configuration
    { category: 'term', question: "電子が入る軌道の層（K, L, M...）", answer: "電子殻", reading: "デンシカク" },
    { category: 'term', question: "内側から1番目の電子殻", answer: "K殻", reading: "ケイカク" },
    { category: 'term', question: "内側から2番目の電子殻", answer: "L殻", reading: "エルカク" },
    { category: 'term', question: "最も外側の電子殻にある電子", answer: "最外殻電子", reading: "サイガイカクデンシ" },
    { category: 'term', question: "結合に関与する電子（希ガスは0）", answer: "価電子", reading: "カデンシ" },
    { category: 'term', question: "最外殻電子が8個（K殻は2個）の安定な状態", answer: "閉殻", reading: "ヘイカク" },

    // 7. Periodic Table
    { category: 'term', question: "元素を原子番号順に並べた表", answer: "周期表", reading: "シュウキヒョウ" },
    { category: 'term', question: "元素の性質が周期的に変化する法則", answer: "周期律", reading: "シュウキリツ" },
    { category: 'term', question: "周期表の横の行", answer: "周期", reading: "シュウキ" },
    { category: 'term', question: "周期表の縦の列", answer: "族", reading: "ゾク" },
    { category: 'term', question: "1族の元素（Hを除く）の総称", answer: "アルカリ金属", reading: "アルカリキンゾク" },
    { category: 'term', question: "2族の元素（Be, Mgを除く）の総称", answer: "アルカリ土類金属", reading: "アルカリドルイキンゾク" },
    { category: 'term', question: "17族の元素の総称", answer: "ハロゲン", reading: "ハロゲン" },
    { category: 'term', question: "18族の元素の総称", answer: "希ガス", reading: "キガス" },
    { category: 'term', question: "1, 2, 12-18族の元素", answer: "典型元素", reading: "テンケイゲンソ" },
    { category: 'term', question: "3-11族の元素", answer: "遷移元素", reading: "センイゲンソ" },

    // 8. Ions & Ionization
    { category: 'term', question: "電子を失って正の電荷を帯びた粒子", answer: "陽イオン", reading: "ヨウイオン" },
    { category: 'term', question: "電子を受け取って負の電荷を帯びた粒子", answer: "陰イオン", reading: "インイオン" },
    { category: 'term', question: "原子から電子1個を取り去るのに必要なエネルギー", answer: "イオン化エネルギー", reading: "イオンカエネルギー" },
    { category: 'term', question: "原子が電子1個を受け取るときに放出されるエネルギー", answer: "電子親和力", reading: "デンシシンワリョク" },
    { category: 'term', question: "イオン化エネルギーが最も小さい族", answer: "1族", reading: "イチゾク" },
    { category: 'term', question: "イオン化エネルギーが最も大きい族", answer: "18族", reading: "ジュウハチゾク" },

    // 9. Chemical Bonds
    { category: 'term', question: "陽イオンと陰イオンの静電気的な引力による結合", answer: "イオン結合", reading: "イオンケツゴウ" },
    { category: 'term', question: "イオン結合でできた結晶", answer: "イオン結晶", reading: "イオンケッショウ" },
    { category: 'term', question: "原子同士が不対電子を出し合って共有する結合", answer: "共有結合", reading: "キョウユウケツゴウ" },
    { category: 'term', question: "共有電子対を引き寄せる強さの尺度", answer: "電気陰性度", reading: "デンキインセイド" },
    { category: 'term', question: "共有結合の電荷の偏り", answer: "極性", reading: "キョクセイ" },
    { category: 'term', question: "非共有電子対を他の原子に提供する結合", answer: "配位結合", reading: "ハイイケツゴウ" },
    { category: 'term', question: "金属原子の陽イオンと自由電子による結合", answer: "金属結合", reading: "キンゾクケツゴウ" },
    { category: 'term', question: "金属が持つ薄く広がる性質", answer: "展性", reading: "テンセイ" },
    { category: 'term', question: "金属が持つ線状に伸びる性質", answer: "延性", reading: "エンセイ" },
    { category: 'term', question: "分子間に働く弱い引力", answer: "ファンデルワールス力", reading: "ファンデルワールスリョク" },
    { category: 'term', question: "水素原子を仲立ちとした分子間の結合", answer: "水素結合", reading: "スイソケツゴウ" },

    // 10. Element Names & Symbols (Basic 20 + Common)
    { category: 'term', question: "元素記号 H", answer: "水素", reading: "スイソ" },
    { category: 'term', question: "元素記号 He", answer: "ヘリウム", reading: "ヘリウム" },
    { category: 'term', question: "元素記号 Li", answer: "リチウム", reading: "リチウム" },
    { category: 'term', question: "元素記号 Be", answer: "ベリリウム", reading: "ベリリウム" },
    { category: 'term', question: "元素記号 B", answer: "ホウ素", reading: "ホウソ" },
    { category: 'term', question: "元素記号 C", answer: "炭素", reading: "タンソ" },
    { category: 'term', question: "元素記号 N", answer: "窒素", reading: "チッソ" },
    { category: 'term', question: "元素記号 O", answer: "酸素", reading: "サンソ" },
    { category: 'term', question: "元素記号 F", answer: "フッ素", reading: "フッソ" },
    { category: 'term', question: "元素記号 Ne", answer: "ネオン", reading: "ネオン" },
    { category: 'term', question: "元素記号 Na", answer: "ナトリウム", reading: "ナトリウム" },
    { category: 'term', question: "元素記号 Mg", answer: "マグネシウム", reading: "マグネシウム" },
    { category: 'term', question: "元素記号 Al", answer: "アルミニウム", reading: "アルミニウム" },
    { category: 'term', question: "元素記号 Si", answer: "ケイ素", reading: "ケイソ" },
    { category: 'term', question: "元素記号 P", answer: "リン", reading: "リン" },
    { category: 'term', question: "元素記号 S", answer: "硫黄", reading: "イオウ" },
    { category: 'term', question: "元素記号 Cl", answer: "塩素", reading: "エンソ" },
    { category: 'term', question: "元素記号 Ar", answer: "アルゴン", reading: "アルゴン" },
    { category: 'term', question: "元素記号 K", answer: "カリウム", reading: "カリウム" },
    { category: 'term', question: "元素記号 Ca", answer: "カルシウム", reading: "カルシウム" },
    { category: 'term', question: "元素記号 Fe", answer: "鉄", reading: "テツ" },
    { category: 'term', question: "元素記号 Cu", answer: "銅", reading: "ドウ" },
    { category: 'term', question: "元素記号 Zn", answer: "亜鉛", reading: "アエン" },
    { category: 'term', question: "元素記号 Ag", answer: "銀", reading: "ギン" },
    { category: 'term', question: "元素記号 Au", answer: "金", reading: "キン" },
    { category: 'term', question: "元素記号 Hg", answer: "水銀", reading: "スイギン" },
    { category: 'term', question: "炎色反応：紅色", answer: "ストロンチウム", reading: "ストロンチウム" }, // Sr
    { category: 'term', question: "炎色反応：黄色", answer: "ナトリウム", reading: "ナトリウム" },
    { category: 'term', question: "炎色反応：赤色", answer: "リチウム", reading: "リチウム" }, // Sr
    { category: 'term', question: "炎色反応：紫色", answer: "カリウム", reading: "カリウム" },
    { category: 'term', question: "炎色反応：橙赤色", answer: "カルシウム", reading: "カルシウム" },
    { category: 'term', question: "炎色反応：黄緑色", answer: "バリウム", reading: "バリウム" },
    { category: 'term', question: "炎色反応：青緑色", answer: "銅", reading: "ドウ" },

    // 11. Chemical Laws
    { category: 'term', question: "化学反応の前後で物質の総質量は変化しない", answer: "質量保存の法則", reading: "シツリョウホゾンノホウソク" },

    // 12. Ionic Compounds (Formula -> Name)
    { category: 'formula', question: "組成式 NaCl", answer: "塩化ナトリウム", reading: "エンカナトリウム" },
    { category: 'formula', question: "組成式 CaCl<sub>2</sub>", answer: "塩化カルシウム", reading: "エンカカルシウム" },
    { category: 'formula', question: "組成式 NaOH", answer: "水酸化ナトリウム", reading: "スイサンカナトリウム" },
    { category: 'formula', question: "組成式 KOH", answer: "水酸化カリウム", reading: "スイサンカカリウム" },
    { category: 'formula', question: "組成式 NaHCO<sub>3</sub>", answer: "炭酸水素ナトリウム", reading: "タンサンスイソナトリウム" },
    { category: 'formula', question: "組成式 Na<sub>2</sub>CO<sub>3</sub>", answer: "炭酸ナトリウム", reading: "タンサンナトリウム" },
    { category: 'formula', question: "組成式 CuSO<sub>4</sub>", answer: "硫酸銅(II)", reading: "リュウサンドウ" },
    { category: 'formula', question: "組成式 AgCl", answer: "塩化銀", reading: "エンカギン" },
    { category: 'formula', question: "組成式 MgO", answer: "酸化マグネシウム", reading: "サンカマグネシウム" },
    { category: 'formula', question: "組成式 Al<sub>2</sub>O<sub>3</sub>", answer: "酸化アルミニウム", reading: "サンカアルミニウム" },
    { category: 'formula', question: "組成式 CaCO<sub>3</sub>", answer: "炭酸カルシウム", reading: "タンサンカルシウム" },
    { category: 'formula', question: "組成式 Ca(OH)<sub>2</sub>", answer: "水酸化カルシウム", reading: "スイサンカカルシウム" },
    { category: 'formula', question: "組成式 NH<sub>4</sub>Cl", answer: "塩化アンモニウム", reading: "エンカアンモニウム" },
    { category: 'formula', question: "組成式 Fe<sub>2</sub>O<sub>3</sub>", answer: "酸化鉄(III)", reading: "サンカテツ" }
];

// Map imported data to local variable for consistency
const quizData = window.QUESTION_DATA;

// --- Engine & Game Logic ---

const romajiMap = {
    'ア': ['a'], 'イ': ['i', 'yi'], 'ウ': ['u', 'wu'], 'エ': ['e'], 'オ': ['o'],
    'カ': ['ka', 'ca'], 'キ': ['ki'], 'ク': ['ku', 'cu', 'qu'], 'ケ': ['ke'], 'コ': ['ko', 'co'],
    'サ': ['sa'], 'シ': ['shi', 'si', 'ci'], 'ス': ['su'], 'セ': ['se', 'ce'], 'ソ': ['so'],
    'タ': ['ta'], 'チ': ['chi', 'ti'], 'ツ': ['tsu', 'tu'], 'テ': ['te'], 'ト': ['to'],
    'ナ': ['na'], 'ニ': ['ni'], 'ヌ': ['nu'], 'ネ': ['ne'], 'ノ': ['no'],
    'ハ': ['ha'], 'ヒ': ['hi'], 'フ': ['fu', 'hu'], 'ヘ': ['he'], 'ホ': ['ho'],
    'マ': ['ma'], 'ミ': ['mi'], 'ム': ['mu'], 'メ': ['me'], 'モ': ['mo'],
    'ヤ': ['ya'], 'ユ': ['yu'], 'ヨ': ['yo'],
    'ラ': ['ra'], 'リ': ['ri'], 'ル': ['ru'], 'レ': ['re'], 'ロ': ['ro'],
    'ワ': ['wa'], 'ヲ': ['wo'], 'ン': ['nn', 'xn'],
    'ガ': ['ga'], 'ギ': ['gi'], 'グ': ['gu'], 'ゲ': ['ge'], 'ゴ': ['go'],
    'ザ': ['za'], 'ジ': ['ji', 'zi'], 'ズ': ['zu'], 'ゼ': ['ze'], 'ゾ': ['zo'],
    'ダ': ['da'], 'ヂ': ['ji', 'di'], 'ヅ': ['zu', 'du'], 'デ': ['de'], 'ド': ['do'],
    'バ': ['ba'], 'ビ': ['bi'], 'ブ': ['bu'], 'ベ': ['be'], 'ボ': ['bo'],
    'パ': ['pa'], 'ピ': ['pi'], 'プ': ['pu'], 'ペ': ['pe'], 'ポ': ['po'],
    'ー': ['-'], '0': ['0'], '1': ['1'], '2': ['2'], '3': ['3'], '4': ['4'],
    'フィ': ['fi']
};

const comboMap = {
    'キャ': ['kya'], 'キュ': ['kyu'], 'キョ': ['kyo'],
    'シャ': ['sha', 'sya'], 'シュ': ['shu', 'syu'], 'ショ': ['sho', 'syo'],
    'チャ': ['cha', 'tya'], 'チュ': ['chu', 'tyu'], 'チョ': ['cho', 'tyo'],
    'ニャ': ['nya'], 'ニュ': ['nyu'], 'ニョ': ['nyo'],
    'ヒャ': ['hya'], 'ヒュ': ['hyu'], 'ヒョ': ['hyo'],
    'ミャ': ['mya'], 'ミュ': ['myu'], 'ミョ': ['myo'],
    'リャ': ['rya'], 'リュ': ['ryu'], 'リョ': ['ryo'],
    'ギャ': ['gya'], 'ギュ': ['gyu'], 'ギョ': ['gyo'],
    'ジャ': ['ja', 'jya', 'zya'], 'ジュ': ['ju', 'jyu', 'zyu'], 'ジョ': ['jo', 'jyo', 'zyo'],
    'ビャ': ['bya'], 'ビュ': ['byu'], 'ビョ': ['byo'],
    'ピャ': ['pya'], 'ピュ': ['pyu'], 'ピョ': ['pyo'],
    'ティ': ['ti', 'thi'], 'ディ': ['di', 'dhi'],
    'フィ': ['fi']
};

class RomajiEngine {
    constructor() {
        this.targetKana = "";
        this.currentPos = 0;
        this.pendingInput = "";
        this.displayStr = "";
        this.confirmedRomaji = "";
    }

    setTarget(kana) {
        this.targetKana = kana;
        this.currentPos = 0;
        this.pendingInput = "";
        this.displayStr = this.convertDefault(kana);
        this.confirmedRomaji = "";
    }

    convertDefault(kanaStr) {
        let result = "";
        for (let i = 0; i < kanaStr.length; i++) {
            const char = kanaStr[i];
            const next = kanaStr[i + 1];

            const comboKey = char + (next || '');
            if (next && comboMap[comboKey]) {
                result += comboMap[comboKey][0];
                i++;
                continue;
            }
            if (char === 'ッ' && next) {
                const nextRomaji = this.getConsonant(next);
                if (nextRomaji) {
                    result += nextRomaji[0];
                    continue;
                }
            }
            if (char === 'ン') {
                result += 'n';
                continue;
            }
            if (romajiMap[char]) result += romajiMap[char][0];
            else result += char;
        }
        return result.toUpperCase();
    }

    getConsonant(kanaChar) {
        if (romajiMap[kanaChar]) return romajiMap[kanaChar][0][0];
        if (comboMap[kanaChar]) return comboMap[kanaChar][0][0];
        return null;
    }

    getNextConsonants(kanaChar) {
        const arr = [];
        const base = comboMap[kanaChar + (this.targetKana[this.currentPos + 2] || '')] ? comboMap[kanaChar + (this.targetKana[this.currentPos + 2] || '')] : romajiMap[kanaChar];
        if (base) {
            base.forEach(r => {
                if (!['a', 'i', 'u', 'e', 'o'].includes(r[0])) arr.push(r[0]);
            });
        }
        return [...new Set(arr)];
    }

    checkInput(key) {
        key = key.toLowerCase();
        if (this.currentPos >= this.targetKana.length) return { valid: false, completed: true };

        const char = this.targetKana[this.currentPos];
        const next = this.targetKana[this.currentPos + 1];

        let possibilities = [];
        let chunkSize = 1;

        const comboKey = char + (next || '');

        if (next && comboMap[comboKey]) {
            possibilities = comboMap[comboKey];
            chunkSize = 2;
        } else if (char === 'ッ' && next) {
            const nextConsonants = this.getNextConsonants(next);
            possibilities = nextConsonants.map(c => c);
            possibilities.push('xtu', 'ltu'); // Direct input
            chunkSize = 1;
        } else if (romajiMap[char]) {
            possibilities = [...romajiMap[char]];
            if (char === 'ン') {
                let allowSingleN = false;
                if (!next) {
                    allowSingleN = true;
                    possibilities.unshift('n');
                } else {
                    const nextConsonants = this.getNextConsonants(next);
                    if (nextConsonants.length > 0) {
                        const firstC = nextConsonants[0][0];
                        if (!['a', 'i', 'u', 'e', 'o', 'n', 'y'].includes(firstC)) {
                            allowSingleN = true;
                        }
                    }
                    if (allowSingleN) possibilities.push('n');
                }
            }
        } else {
            possibilities = [char];
        }

        const attempt = this.pendingInput + key;
        const matched = possibilities.find(p => p.startsWith(attempt));

        if (matched) {
            this.pendingInput += key;
            if (this.pendingInput === matched) {
                this.confirmedRomaji += matched;
                this.updateDisplay(matched, chunkSize);
                this.currentPos += chunkSize;
                this.pendingInput = "";
                return { valid: true, completed: this.currentPos >= this.targetKana.length };
            }
            return { valid: true, completed: false };
        } else {
            if (this.pendingInput === 'n' && possibilities.includes('n')) {
                this.confirmedRomaji += 'n';
                this.updateDisplay('n', 1);
                this.currentPos += 1;
                this.pendingInput = "";
                return this.checkInput(key);
            }
        }
        return { valid: false, completed: false };
    }

    updateDisplay(typedRomaji, kanaLength) {
        const remainingKana = this.targetKana.substring(this.currentPos + kanaLength);
        const remainingDefault = this.convertDefault(remainingKana);
        this.displayStr = (this.confirmedRomaji + remainingDefault).toUpperCase();
    }
}

class Game {
    constructor() {
        this.score = 0;
        this.combo = 0;
        this.maxHP = 100;
        this.hp = 100;
        this.timeLeft = 20;
        this.timerMax = 20;
        this.timerInterval = null;

        this.mode = null; // 'terms', 'choice'
        this.currentQuestion = null;
        this.currentChoices = [];
        this.correctChoiceIdx = -1;

        this.questionsPlayed = 0;
        this.maxQuestions = 20;

        this.isGameOver = false;

        this.romajiEngine = new RomajiEngine();

        this.dom = {
            question: document.getElementById('question-text'),
            answerKanji: document.getElementById('answer-kanji'),
            typing: document.getElementById('typing-field'),
            choiceArea: document.getElementById('choice-area'),
            choiceBtns: [
                document.getElementById('choice-1'),
                document.getElementById('choice-2'),
                document.getElementById('choice-3'),
                document.getElementById('choice-4')
            ],
            score: document.getElementById('score'),
            combo: document.getElementById('combo'),
            hpBar: document.getElementById('player-hp'),
            fuseActive: document.getElementById('fuse-active'),
            startScreen: document.getElementById('start-screen'),
            card: document.getElementById('element-card'),
            explosion: document.getElementById('explosion-effect')
        };

        document.addEventListener('keydown', (e) => this.handleInput(e));
    }

    start(mode) {
        this.mode = mode;
        this.score = 0;
        this.combo = 0;
        this.hp = this.maxHP;
        this.questionsPlayed = 0;
        this.isGameOver = false;

        this.dom.startScreen.classList.add('hidden');
        this.updateStats();
        this.nextQuestion();
    }

    stopGame() {
        clearInterval(this.timerInterval);
        this.isGameOver = true;
    }

    nextQuestion() {
        if (this.isGameOver) return;

        if (this.questionsPlayed >= this.maxQuestions) {
            this.gameClear();
            return;
        }

        this.questionsPlayed++;

        let pool = [];
        if (this.mode === 'terms') {
            pool = database;
        } else if (this.mode === 'choice') {
            pool = quizData;
        }

        const idx = Math.floor(Math.random() * pool.length);
        this.currentQuestion = pool[idx];

        // Timer Reset
        this.timeLeft = this.timerMax;
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => this.tickTimer(), 100);

        // Hide answer INSTANTLY to prevent flashing
        this.dom.answerKanji.style.transition = 'none';
        this.dom.answerKanji.style.opacity = '0';
        this.dom.answerKanji.innerHTML = '';
        this.dom.fuseActive.style.width = '100%';
        this.dom.fuseActive.style.backgroundColor = '#ffaa00';

        // Force reflow to ensure transition removal takes effect before next visibility change
        void this.dom.answerKanji.offsetWidth;
        this.dom.answerKanji.style.transition = 'opacity 0.2s';

        // Display Setup
        if (this.mode === 'terms') {
            this.dom.question.innerHTML = `[${this.questionsPlayed}/${this.maxQuestions}] ${this.currentQuestion.question}`;
            this.dom.answerKanji.innerHTML = this.currentQuestion.answer;
        } else if (this.mode === 'choice') {
            this.dom.question.innerHTML = `[${this.questionsPlayed}/${this.maxQuestions}] ${this.currentQuestion.text}`;
            this.dom.answerKanji.innerHTML = this.currentQuestion.options[this.currentQuestion.correctIndex];
        }

        // Mode Specific Setup
        if (this.mode === 'choice') {
            this.setupChoiceMode();
        } else {
            this.setupTypingMode();
        }
    }

    setupTypingMode() {
        this.dom.typing.classList.remove('hidden');
        this.dom.choiceArea.classList.add('hidden');

        this.showHint = false; // Reset hint state
        this.romajiEngine.setTarget(this.currentQuestion.reading);
        this.renderTypingField();
    }

    setupChoiceMode() {
        this.dom.typing.classList.add('hidden');
        this.dom.choiceArea.classList.remove('hidden');

        const correctOpt = this.currentQuestion.options[this.currentQuestion.correctIndex];
        const allOpts = [...this.currentQuestion.options];

        this.currentChoices = this.shuffle(allOpts);
        this.correctChoiceIdx = this.currentChoices.indexOf(correctOpt);

        this.dom.choiceBtns.forEach((btn, i) => {
            btn.innerHTML = this.currentChoices[i];
            btn.className = 'choice-btn';
            btn.disabled = false;
        });
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    tickTimer() {
        this.timeLeft -= 0.1;
        const pct = (this.timeLeft / this.timerMax) * 100;
        this.dom.fuseActive.style.width = `${pct}%`;

        if (pct < 30) this.dom.fuseActive.style.backgroundColor = '#ff3300';
        else this.dom.fuseActive.style.backgroundColor = '#ffaa00';

        if (this.timeLeft <= 0) {
            this.handleTimeout();
        }
    }

    handleTimeout() {
        clearInterval(this.timerInterval);

        this.dom.explosion.classList.add('explode-anim');
        setTimeout(() => this.dom.explosion.classList.remove('explode-anim'), 1000);

        this.damagePlayer(30);
        this.showAnswerAndNext();
    }

    showAnswerAndNext() {
        if (this.mode === 'choice') {
            this.dom.choiceBtns[this.correctChoiceIdx].classList.add('choice-correct');
        } else {
            this.dom.answerKanji.style.opacity = '1';
        }

        setTimeout(() => {
            if (!this.isGameOver) this.nextQuestion();
        }, 1500);
    }

    handleInput(e) {
        if (this.isGameOver || !this.currentQuestion) return;

        if (this.mode === 'choice') {
            if (['1', '2', '3', '4'].includes(e.key)) {
                const idx = parseInt(e.key) - 1;
                this.handleChoice(idx);
            }
            return;
        }

        // Typing Mode
        if (e.key.length !== 1 || e.ctrlKey || e.altKey || e.metaKey) return;
        const result = this.romajiEngine.checkInput(e.key);
        if (result.valid) {
            this.correctInput(result.completed);
        } else {
            this.wrongInput();
        }
    }

    handleChoice(idx) {
        if (idx === this.correctChoiceIdx) {
            // Correct
            clearInterval(this.timerInterval);
            this.dom.choiceBtns[idx].classList.add('choice-correct');

            // Score Calculation: Base 100 + TimeBonus (sec*10) + ComboBonus
            const timeBonus = Math.ceil(this.timeLeft) * 10;
            this.score += 100 + timeBonus + (this.combo * 10);

            this.combo++;
            this.updateStats();
            this.dom.card.classList.add('correct-pulse');
            setTimeout(() => this.dom.card.classList.remove('correct-pulse'), 300);

            setTimeout(() => this.nextQuestion(), 500);
        } else {
            // Wrong
            this.dom.choiceBtns[idx].classList.add('choice-wrong');
            this.damagePlayer(10);
            this.combo = 0;
            this.updateStats();
        }
    }

    renderTypingField() {
        const displayDiv = this.dom.typing;
        displayDiv.innerHTML = '';

        const fullStr = this.romajiEngine.displayStr;
        // Total characters correctly typed so far (confirmed + pending buffer)
        const typedLength = this.romajiEngine.confirmedRomaji.length + this.romajiEngine.pendingInput.length;

        for (let i = 0; i < fullStr.length; i++) {
            const span = document.createElement('span');

            if (i < typedLength) {
                // Character already typed
                span.textContent = fullStr[i];
                span.className = 'char-correct';
            } else if (this.showHint && i === typedLength) {
                // Hint for next character (on mistake)
                span.textContent = fullStr[i];
                span.className = 'char-wrong';
            } else {
                // Hidden character
                span.textContent = '_';
                span.className = 'char-hidden';
            }
            displayDiv.appendChild(span);
        }
    }

    correctInput(completed) {
        this.showHint = false; // Hide hint on correct input
        this.renderTypingField();

        if (completed) {
            clearInterval(this.timerInterval);

            // Score Calculation: Base 100 + TimeBonus (sec*10) + ComboBonus
            const timeBonus = Math.ceil(this.timeLeft) * 10;
            this.score += 100 + timeBonus + (this.combo * 10);

            this.combo++;
            this.updateStats();
            this.dom.card.classList.add('correct-pulse');
            setTimeout(() => this.dom.card.classList.remove('correct-pulse'), 300);
            this.dom.answerKanji.style.opacity = '1';
            setTimeout(() => this.nextQuestion(), 400);
        }
    }

    wrongInput() {
        this.showHint = true; // Show hint on wrong input
        this.combo = 0;
        this.updateStats();
        this.damagePlayer(5);
        this.dom.answerKanji.style.opacity = '0'; // Keep hidden
        this.dom.card.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], { duration: 200 });
        this.renderTypingField();
    }

    damagePlayer(amount) {
        this.hp = Math.max(0, this.hp - amount);
        this.updateStats();
        this.dom.hpBar.parentElement.classList.add('anim-damage');
        setTimeout(() => this.dom.hpBar.parentElement.classList.remove('anim-damage'), 300);

        if (this.hp <= 0) {
            this.gameOver();
        }
    }

    updateStats() {
        this.dom.score.textContent = this.score;
        this.dom.combo.textContent = this.combo;
        this.dom.hpBar.style.width = `${(this.hp / this.maxHP) * 100}%`;
    }

    gameClear() {
        this.stopGame();
        // HP Bonus
        const hpBonus = this.hp * 100;
        this.score += hpBonus;
        this.updateStats();

        // Show Modal instead of Alert
        showRankingModal(this.score);
    }

    gameOver() {
        this.stopGame();
        // Show Modal instead of Alert
        showRankingModal(this.score);
    }
}

const game = new Game();

// Expose to window for HTML onclick handlers
window.startGame = function (mode) {
    game.start(mode);
};
// --- Ranking System Integration ---
document.addEventListener('DOMContentLoaded', async () => {
    console.log("DOM Loaded: Check Ranking...");

    // Wait for Ranking if not ready (give it a moment for module to execute)
    if (!window.Ranking) {
        console.log("Ranking not ready, waiting...");
        await new Promise(r => setTimeout(r, 500));
    }

    // 1. Initialize Firebase
    if (window.Ranking) {
        console.log("Initializing Ranking...");
        const success = window.Ranking.initFirebase();
        if (success) {
            updateRankingDisplay();
        }
    } else {
        console.error("Ranking module failed to load or blocked.");
        const list = document.getElementById('ranking-list');
        if (list) list.innerHTML = "<li>Ranking Unavailable (Check Console)</li>";
    }

    // 2. Setup Modal Handlers
    const submitBtn = document.getElementById('submit-score-btn');
    const closeBtn = document.getElementById('close-modal-btn');

    console.log("Setup Buttons:", submitBtn, closeBtn);

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            console.log("Submit Clicked");
            submitScore();
        });
    }
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
});



async function updateRankingDisplay() {
    const list = document.getElementById('ranking-list');
    if (!list) return;

    list.innerHTML = '<li>Loading...</li>';

    if (window.Ranking) {
        const scores = await window.Ranking.getTopScores(3);
        list.innerHTML = '';
        if (scores.length === 0) {
            list.innerHTML = '<li>No Data</li>';
            return;
        }

        scores.forEach((entry, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${index + 1}. ${entry.name}</span> <span>${entry.score}</span>`;
            list.appendChild(li);
        });
    }
}

function showRankingModal(score) {
    const modal = document.getElementById('modal-overlay');
    const scoreDisplay = document.getElementById('final-score-display');
    const nameInput = document.getElementById('player-name-input');

    if (scoreDisplay) scoreDisplay.textContent = score;
    if (nameInput) nameInput.value = ''; // Reset input
    if (modal) modal.classList.remove('hidden');
}

async function submitScore() {
    const nameInput = document.getElementById('player-name-input');
    const scoreDisplay = document.getElementById('final-score-display');
    const name = nameInput ? (nameInput.value.trim() || "NO NAME") : "NO NAME";
    const score = scoreDisplay ? parseInt(scoreDisplay.textContent) : 0;

    if (window.Ranking) {
        await window.Ranking.saveScore(name, score);
        alert('ランキングに登録しました！');
        closeModal();
        updateRankingDisplay(); // Refresh ranking
    } else {
        alert('ランキングシステムが利用できません。');
        closeModal();
    }
}

function closeModal() {
    const modal = document.getElementById('modal-overlay');
    if (modal) modal.classList.add('hidden');
    // Reload to reset game state
    location.reload();
}
