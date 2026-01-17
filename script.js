// ==================== 音乐控制按钮位置配置 ====================
// 音乐控制按钮的X轴和Y轴偏移值配置在 LAYOUT_CONFIG.musicToggleBtn 中
// 位置：约第312行，在 LAYOUT_CONFIG 对象内
// 修改 transformX 和 transformY 的值来调整按钮位置：
//   transformX: X轴偏移值（像素），负值向左，正值向右
//   transformY: Y轴偏移值（像素），负值向上，正值向下

// ==================== 游戏文本配置（标题和说明文字） ====================
const GAME_TEXT_CONFIG = {
    // 游戏标题
    title: '韵脚大师 Rhymemaster',
    
    // 游戏说明文字
    instructions: {
        text: '作词接力：系统会随机给出歌词的上半句，玩家需要根据韵脚创作下半句歌词。词盘里橙色高亮的字符合该韵脚。可以在"交换模式"自由移动汉字，完成创作后切到"填句模式"连续点选相邻汉字（4-10字，支持横、竖、斜方向），进行「检测下半句」验证。',
        // 说明文字样式参数
        fontSize: '0.95em',
        padding: 10,
        backgroundColor: 'rgba(255, 140, 148, 0.9)',
        borderRadius: 10,
        color: '#666'
    },
    
    // 标题样式参数
    titleStyle: {
        fontSize: '2em',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginTop: 40, // 标题下移40像素
        marginBottom: 20
    },
    
    // 按钮文字
    buttons: {
        modeToggle: {
            swapMode: '当前：交换模式',
            fillMode: '当前：填句模式'
        },
        checkSentence: '检测下半句',
        reset: '重新开始'
    },
    
    // 面板文字
    panels: {
        levelIndicator: '第 {level} 关', // {level} 会被替换为实际关卡数
        sentenceLabel: '当前选中的下半句：',
    },
    
    // 横线配置
    underline: {
        length: 20  // 横线长度（下划线字符的数量）
    }
};

// ==================== 视差背景配置 ====================
const PARALLAX_CONFIG = {
    // 视差层配置（从下到上）
    layers: [
        {
            image: 'img/bg_environment_01.jpg',
            speed: 0.3,  // 视差速度（0-1，值越大移动越快）
            zIndex: -1
        }
        // 可以在这里添加更多图层
    ],
    // 视差效果强度
    intensity: 50,  // 最大移动距离（像素）
    // 是否启用视差效果
    enabled: true
};

// ==================== 交互控件配置 ====================
const INTERACTION_CONFIG = {
    // 手柄按钮配置
    handles: {
        // 行交换按钮（位于两行之间）
        rowSwap: {
            className: 'row-swap-btn',
            icon: '⇅',
            width: 30,
            height: 20,
            fontSize: 14,
            titleTemplate: '交换第 {row1} 行和第 {row2} 行（消耗{steps}步）', // {row1}, {row2}, {steps} 会被替换
            steps: 6,
            spacingOffset: 55,  // 行手柄间距偏移（像素），正值增加间距，负值减少间距（已废弃，使用individualOffsets）
            // 每个行手柄的Y轴偏移值（数组，索引对应第i个手柄，共7个手柄）
            individualOffsets: [80, 112, 140, 170, 200, 230, 260],  // 默认全部为0，可根据需要单独设置
            // 每个行手柄的X轴偏移值（数组，索引对应第i个手柄，共7个手柄）
            individualXOffsets: [20, 20, 20, 20, 20, 20, 20]  // 默认全部为0，可根据需要单独设置
        },
        // 列交换按钮（位于两列之间）
        colSwap: {
            className: 'col-swap-btn',
            icon: '⇄',
            width: 20,
            height: 30,
            fontSize: 14,
            titleTemplate: '交换第 {col1} 列和第 {col2} 列（消耗{steps}步）', // {col1}, {col2}, {steps} 会被替换
            steps: 6,
            spacingOffset: 30,  // 列手柄间距偏移（像素），正值增加间距，负值减少间距（已废弃，使用individualOffsets）
            // 每个列手柄的X轴偏移值（数组，索引对应第j个手柄，共7个手柄）
            individualOffsets: [33, 65, 95, 127, 155, 182, 216],  // 默认全部为0，可根据需要单独设置
            // 每个列手柄的Y轴偏移值（数组，索引对应第j个手柄，共7个手柄）
            individualYOffsets: [20, 20, 20, 20, 20, 20, 20]  // 默认全部为0，可根据需要单独设置
        },
        // 手柄容器配置
        container: {
            rowHandles: {
                width: 40,
                marginRight: 5
            },
            colHandles: {
                height: 40,
                marginBottom: 5
            }
        }
    },
    
    // 网格配置
    grid: {
        padding: 10,
        gap: 5,
        rows: 8,
        cols: 8
    },
    
    // 步数配置
    steps: {
        maxSteps: 50,
        singleSwapCost: 1,  // 单个汉字交换消耗的步数
        rowColSwapCost: 6   // 整行/列交换消耗的步数
    },
    
    // 交互时间配置
    timing: {
        doubleClickThreshold: 300,  // 双击检测时间阈值（毫秒）
        swapAnimationDuration: 400,  // 交换动画时长（毫秒）
        nextLevelDelay: 650          // 进入下一关的延迟（毫秒）
    },
    
    // 消息文字配置
    messages: {
        swapMode: '',
        fillMode: '',
        stepsExhausted: '步数已用尽，无法继续操作。',
        rowSelected: '已选择第 {index} 行。双击另一行可交换两行（消耗6步），或再次双击取消选择。',
        colSelected: '已选择第 {index} 列。双击另一列可交换两列（消耗6步），或再次双击取消选择。',
        rowDeselected: '已取消行选择。双击行/列可移动整行/列（消耗6步）。',
        colDeselected: '已取消列选择。双击行/列可移动整行/列（消耗6步）。',
        swapAdjacentHint: '请选择相邻的汉字进行交换（消耗1步），或双击行/列移动整行/列（消耗6步）。',
        sentenceRestart: '已从该字重新开始选句，需要连续相邻的汉字（支持横、竖、斜方向）。',
        stepsInsufficient: '剩余步数不足，无法完成此操作。需要 {required} 步，但只剩 {remaining} 步。',
        gameOver: '步数已用尽！点击确定重新开始。'
    },
    
    // 句子配置
    sentence: {
        minLength: 4,
        maxLength: 10,
        placeholder: '（请连续点选 4-10 个相邻汉字）'
    },
    
    // 对话框文字配置
    dialog: {
        checkResult: {
            title: '检测结果',
            minLengthError: '至少选择 4 个连续相邻的汉字再检测下半句。',
            maxLengthError: '最多只支持 10 个字的下半句，请缩短一点再试。',
            invalidSentence: '「{text}」暂时没有通过歌词库/通顺度判定，再试试更像一句 Rap 的下半句。',
            noRhymeGroup: '「{text}」看起来还可以，但结尾字不在韵脚库中，再换一个结尾试试。',
            rhymeMismatch: '不押韵 ❌\n下半句结尾字「{char}」的韵脚不匹配本关上半句要求，再试试别的结尾。',
            success: '押韵且有效 ✅\n「{text}」！\n点击确定进入下一关。',
            levelRhymeError: '本关上半句暂时无法确定韵脚（韵脚库不足），请补充 rhymeGroups 或更换题目。'
        },
        stepsInsufficient: {
            title: '步数不足',
            message: '剩余步数不足，无法完成此操作。需要 {required} 步，但只剩 {remaining} 步。'
        },
        gameOver: {
            title: '游戏结束',
            message: '步数已用尽！点击确定重新开始。'
        }
    }
};

// ==================== 布局位置配置（统一管理所有元素的位置参数） ====================
const LAYOUT_CONFIG = {
    // body 布局
    body: {
        padding: 0,
        paddingLeft: 20,
        paddingRight: 20,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'relative'
    },
    
    // 视差背景容器
    parallaxContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
    },
    
    // 视差背景层
    parallaxLayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        minWidth: '100%',
        minHeight: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    },
    
    // 游戏根容器
    gameRoot: {
        position: 'relative',
        width: 720,
        minHeight: 1280,
        transformOrigin: 'center top',
        background: '#0d0d0d',
        zIndex: 1,
        overflow: 'hidden'
    },
    
    // 主容器
    container: {
        position: 'relative',
        zIndex: 1,
        background: 'transparent',
        borderRadius: 20,
        padding: 0,  // 注意：CSS中有 padding: px; 这是错误的，应该设为0或具体值
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        maxWidth: 700,
        width: '100%',
        minHeight: '100%',
        marginTop: 300  // 所有内容下移300像素（背景除外）
    },
    
    // 标题
    title: {
        textAlign: 'center',
        color: '#333',
        marginBottom: 20,
        fontSize: '2em'
    },
    
    // 说明文字
    instructions: {
        textAlign: 'center',
        color: '#666',
        marginBottom: 30,
        padding: 10,
        background: '#f5f5f5',
        borderRadius: 10
    },
    
    // 关卡面板
    levelPanel: {
        margin: '-10px 0 16px',
        padding: '12px 14px',
        background: 'none',
        border: '0px solid #dbe3ff',
        borderRadius: 12
    },
    
    // 关卡元信息
    levelMeta: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        marginBottom: 8,
        flexWrap: 'wrap',
        opacity: 0  // 透明度设置为0（完全透明）
    },
    
    // 关卡指示器
    levelIndicator: {
        display: 'inline-block',
        padding: '4px 10px',
        borderRadius: 999,
        background: 'rgba(102, 126, 234, 0.12)',
        color: '#5568d3',
        fontWeight: 'bold',
        fontSize: '0.9em',
        transformY: -190  // Y轴偏移值（像素），负值向上，正值向下
    },
    
    // 韵部解锁进度指示器（左上角）
    rhymeProgressIndicator: {
        position: 'fixed',
        top: 20,
        left: 20,
        padding: '8px 16px',
        borderRadius: 20,
        background: 'rgba(102, 126, 234, 0.2)',
        color: '#5568d3',
        fontWeight: 'bold',
        fontSize: '1.1em',
        zIndex: 100,
        border: '2px solid rgba(102, 126, 234, 0.3)',
        transformX: 100  // X轴偏移值（像素），负值向左，正值向右
    },
    
    // 音乐控制按钮（右上角）
    musicToggleBtn: {
        position: 'fixed',
        top: 20,
        right: 20,
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: '2px solid rgba(102, 126, 234, 0.3)',
        background: 'rgba(102, 126, 234, 0.2)',
        color: '#5568d3',
        fontSize: 20,
        zIndex: 100,
        transformX: -140,  // X轴偏移值（像素），负值向左，正值向右
        transformY: 0   // Y轴偏移值（像素），负值向上，正值向下
    },
    
    // 步数指示器
    stepsIndicator: {
        display: 'inline-block',
        padding: '4px 10px',
        borderRadius: 999,
        background: 'rgba(76, 175, 80, 0.12)',
        color: '#4caf50',
        fontWeight: 'bold',
        fontSize: '0.9em'
    },
    
    // 步数容器（Brutalist风格按钮）
    stepsContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 150,
        fontFamily: 'monospace',
        zIndex: 10,
        transformY: -220  // Y轴偏移值（像素），负值向上，正值向下
    },
    
    // 模式切换按钮（交换/填句）
    modeToggleSwitch: {
        position: 'relative',
        transformX: 90,  // X轴偏移值（像素），负值向左，正值向右
        transformY: -80   // Y轴偏移值（像素），负值向上，正值向下
    },
    
    // 上半句
    upperLine: {
        textAlign: 'center',
        fontSize: '1.15em',
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: '0.5px',
        transformY: -190  // Y轴偏移值（像素），负值向上，正值向下
    },
    
    // 选中文字（显示在横线上方）
    selectedTextAboveLine: {
        transformX: 50,  // X轴偏移值（像素），负值向左，正值向右
        transformY: 15   // Y轴偏移值（像素），负值向上，正值向下
    },
    
    // 网格包装器
    gridWrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: 20,
        transformX: -30,  // X轴偏移值（像素），负值向左，正值向右
        transformY: 60  // Y轴偏移值（像素），负值向上，正值向下
    },
    
    // 带列手柄的网格容器
    gridWithColHandles: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    
    // 网格容器
    gridContainer: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gap: 5,
        padding: 10,
        borderRadius: 10,
        background: 'url("img/bg_word_01.png") center center / contain no-repeat'
    },
    
    // 行手柄容器
    rowHandles: {
        position: 'relative',
        width: 40,
        marginRight: 5,
        minHeight: '100%'
    },
    
    // 列手柄容器
    colHandles: {
        position: 'relative',
        height: 40,
        marginBottom: 5,
        width: '100%'
    },
    
    // 行交换按钮
    rowSwapBtn: {
        width: 30,
        height: 20,
        fontSize: 14,
        zIndex: 5
    },
    
    // 列交换按钮
    colSwapBtn: {
        width: 20,
        height: 30,
        fontSize: 14,
        zIndex: 5
    },
    
    // 网格单元格
    gridCell: {
        aspectRatio: 1,
        borderRadius: 8,
        fontSize: '1.5em',
        fontWeight: 'bold',
        color: '#333'
    },
    
    // 状态区域
    status: {
        textAlign: 'center'
    },
    
    // 消息
    message: {
        minHeight: 30,
        marginBottom: 15,
        fontSize: '1.1em',
        fontWeight: 'bold',
        color: '#667eea'
    },
    
    // 句子面板
    sentencePanel: {
        marginBottom: 15,
        padding: '10px 12px',
        background: '#f7f3ff',
        borderRadius: 10,
        border: '1px solid #e0dbff',
        fontSize: '0.95em'
    },
    
    // 句子标签
    sentenceLabel: {
        color: '#666',
        marginBottom: 4
    },
    
    // 句子内容
    sentenceContent: {
        minHeight: 28,
        fontSize: '1.2em',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 6
    },
    
    // 次要按钮
    secondaryBtn: {
        cursor: 'pointer',
        display: 'flex',
        gap: '0.5rem',
        border: 'none',
        transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
        borderRadius: 100,
        fontWeight: 800,
        placeContent: 'center',
        padding: '0.75rem 1rem',
        fontSize: '0.825rem',
        lineHeight: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.04)',
        color: '#fff',
        marginLeft: 6,
        transformX: 0,  // X轴偏移值（像素），负值向左，正值向右
        transformY: 820,  // Y轴偏移值（像素），负值向上，正值向下
        scale: 1.4      // 缩放比例，1.4 表示放大为原来的1.4倍
    },
    
    // 网格控制按钮区域
    gridControls: {
        display: 'flex',
        justifyContent: 'center',
        gap: 12,
        marginBottom: 10,
        padding: '0 10px'
    },
    
    // 重置按钮
    resetBtn: {
        padding: '12px 30px',
        fontSize: '1em',
        borderRadius: 25,
        fontWeight: 'bold',
        transformX: -250,  // X轴偏移值（像素），负值向左，正值向右
        transformY: -750  // Y轴偏移值（像素），负值向上，正值向下
    },
    
    // 对话框
    resultDialog: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1000
    },
    
    // 对话框内容
    resultDialogContent: {
        maxWidth: 400,
        width: '90%',
        maxHeight: '80vh',
        borderRadius: 20
    },
    
    // 对话框头部
    resultDialogHeader: {
        padding: '20px 24px'
    },
    
    // 对话框主体
    resultDialogBody: {
        padding: 24,
        minHeight: 80
    },
    
    // 对话框底部
    resultDialogFooter: {
        padding: '16px 24px 24px'
    },
    
    // 确认按钮
    resultConfirmBtn: {
        padding: '12px 40px',
        fontSize: '1em',
        borderRadius: 25,
        fontWeight: 'bold'
    },
    
    // 正确标记容器
    correctMarkContainer: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        fontSize: '0.8em',
        zIndex: 10
    },
    
    // 正确标记
    correctMarkCheckmark: {
        height: '1.3em',
        width: '1.3em',
        borderRadius: '50%'
    }
};

// ==================== 游戏根容器尺寸配置 ====================
const GAME_ROOT_CONFIG = {
    width: 720,
    height: 1280
};

// ==================== 各元素位置配置（已废弃，使用LAYOUT_CONFIG代替） ====================
const ELEMENT_POSITIONS = {
    // 标题区域
    title: {
        x: 0,
        y: 200,
        width: '100%',
        height: 'auto',
        marginBottom: 0
    },
    // 说明文字区域
    instructions: {
        x: 0,
        y: 'auto',
        width: '100%',
        height: 'auto',
        marginBottom: 30,
        padding: 10
    },
    // 模式切换按钮区域
    controls: {
        x: 0,
        y: 'auto',
        width: '100%',
        height: 'auto',
        marginBottom: 10
    },
    // 关卡面板
    levelPanel: {
        x: 0,
        y: 'auto',
        width: '100%',
        height: 'auto',
        marginBottom: 16,
        padding: { top: 12, right: 14, bottom: 12, left: 14 }
    },
    // 汉字横幅图
    wordBanner: {
        x: 0,
        y: 'auto',
        width: '100%',
        height: 80,
        marginBottom: 10
    },
    // 8x8 网格容器
    gridContainer: {
        x: 0,
        y: 'auto',
        width: '100%',
        height: 'auto',
        marginBottom: 20,
        padding: 10,
        gridGap: 5
    },
    // 句子面板
    sentencePanel: {
        x: 0,
        y: 'auto',
        width: '100%',
        height: 'auto',
        marginBottom: 15,
        padding: { top: 10, right: 12, bottom: 10, left: 12 }
    },
    // 状态消息区域
    status: {
        x: 0,
        y: 'auto',
        width: '100%',
        height: 'auto'
    }
};

// ==================== 游戏状态 ====================
let grid = [];
let isGameWon = false;
let selectedCell = null; // 交换模式下选择的格子
let isSwapMode = true; // true: 交换模式；false: 填句模式（默认：交换模式）
let lastAnswerPath = []; // legacy（旧：答案嵌入路径），自由创作模式不再使用

// "半句填空"模式状态
let currentSentenceCells = []; // { row, col }
let completedLowerLines = []; // 通过检测的下半句 { text, rhymeGroup }
let unlockedRhymeGroups = new Set(); // 已解锁的韵部集合
let currentLevelIndex = 0;
let activeLevel = null; // { upperLine, rhymeGroup }
let correctMarkCell = null; // 已确认正确的最后一个汉字位置 { row, col }

// 步数限制（从配置中读取）
const MAX_STEPS = INTERACTION_CONFIG.steps.maxSteps;
let remainingSteps = MAX_STEPS; // 剩余步数
let selectedRowOrCol = null; // 选中的行或列 { type: 'row'|'col', index: number }，用于整行/列移动

// ==================== 关卡配置 ====================
// 根据关卡索引（从0开始）确定字数要求
const LEVEL_CONFIG = {
    // 关卡索引（从0开始）到字数要求的映射
    // 第一关（索引0）：4+4（上半句4字，下半句4字）
    // 第二关（索引1）：5+5（上半句5字，下半句5字）
    // 第三关（索引2）：4+5（上半句4字，下半句5字）
    // 第四关（索引3）：6+6（上半句6字，下半句6字）
    getWordRequirement(levelIndex) {
        const requirements = [
            { upperCount: 4, lowerCount: 4 },  // 第1关：4+4
            { upperCount: 5, lowerCount: 5 },  // 第2关：5+5
            { upperCount: 4, lowerCount: 5 },  // 第3关：4+5
            { upperCount: 6, lowerCount: 6 }   // 第4关：6+6
        ];
        // 如果关卡索引超出配置范围，使用最后一个配置（6+6）
        return requirements[levelIndex] || requirements[requirements.length - 1];
    }
};

// 按 round 分组的上半句库
// 第一关从 round1 调取，第二关从 round2 调取，以此类推
const rhymeUpperLinesByRound = {
    // Round 1：4字上半句
    1: [
        '快乐崇拜，',  // 怀来辙
        '别来无恙，',  // 江阳辙
        '爱到尽头，',  // 油求辙
        '我不后悔，'   // 灰堆辙
    ],
    // Round 2：5字上半句
    2: [
        '快刀斩乱麻，',  // 发花辙
        '忘了你存在，',  // 怀来辙
        '普通或另类，',  // 灰堆辙
        '时间如流水，',  // 灰堆辙
        '小城故事多，',  // 梭波辙
        '床前明月光，'   // 江阳辙
    ],
    // Round 3：4字上半句（4+5：上半句4字，下半句5字）
    3: [
        '无风的海，',  // 怀来辙
        '纸飞机里，',  // 一七辙
        '汽水咕噜，',  // 姑苏辙
        '欢喜的眼，',  // 言前辙
        '一笔带过，',  // 梭波辙
        '我们唱着，'   // 梭波辙
    ],
    // Round 4：6字上半句（6+6：上半句6字，下半句6字）
    4: [
        '运用我的天赋，',  // 姑苏辙
        '琴键上透着光，',  // 江阳辙
        '天色是有点暗，',  // 言前辙
        '心扑通扑通跳，'   // 遥条辙
    ]
};

// 根据上半句获取对应的韵脚分组
function getRhymeGroupForUpperLine(upperLine) {
    const lastChar = upperLine.match(/[\u4e00-\u9fff]/g)?.pop();
    if (!lastChar) return null;
    return getRhymeGroup(lastChar);
}

// 上半句到下半句种子库的映射（从文档提取）
// 当出现某个上半句时，棋盘必须包含对应下半句种子库中的所有汉字
const upperToLowerSeeds = {
    // Round 1
    '别来无恙，': [
        '还在路上', '世人慌张', '碎银几两', '夜色茫茫', '跌跌撞撞', '学会坚强', 
        '铁石心肠', '夜梦家乡', '学着遗忘', '决不投降', '继续远航', '渴望飞翔', 
        '确定方向', '拒绝回望'
    ],
    '快乐崇拜，': [
        '快乐无害', '排山倒海', '太多期待', '肆意起来', '还要去爱', '百分之百', 
        '爱的年代', '爱的对白', '再站起来', '快乐摇摆', '开始明白', '爱不更改', 
        '浇灌未来', '任他丑怪', '来到现代'
    ],
    '我不后悔，': [
        '我无所谓', '做好准备', '错还是对', '问心无愧', '青春不褪', '头也不回', 
        '无路可退', '誓死不归', '此生无悔', '错也奉陪', '背影成碑'
    ],
    '爱到尽头，': [
        '覆水难收', '余温未留', '风满空袖', '魂断西楼', '何必强求', '泪酿成酒', 
        '放手是舟', '剧终幕收', '别再逗留', '重新开头'
    ],
    // Round 2
    '快刀斩乱麻，': [
        '金戈伴铁马', '赤血染黄沙', '青春成白发', '江湖自潇洒', '意气趁年华', 
        '乱局中称霸', '谈笑定天涯'
    ],
    '忘了你存在，': [
        '有什么期待', '一个人走开', '气氛难释怀', '欢乐与悲哀', '哭得像小孩', 
        '为何缘是债', '过得很精彩', '拥挤的地带', '我热的发呆'
    ],
    '普通或另类，': [
        '讨厌或敬佩', '灵魂会调味', '开心就都对', '独特是年岁', '要用心体会', 
        '怕碰着同类', '剩痛苦眼泪', '伤痛会加倍', '不用管结尾', '我定义何为', 
        '向前别理会'
    ],
    '时间如流水，': [
        '一去不复回', '思念的滋味', '天天去回味', '快乐变虚伪', '用心去体会', 
        '有缘自相会', '今晚先碰杯', '不在乎是非', '劳燕各分飞', '往事已成灰'
    ],
    '小城故事多，': [
        '充满喜和乐', '只能对你说', '岁月慢慢磨', '泛起旧时波', '昨日开心过', 
        '最后剩沉默', '爱念仍未说', '花开又花落', '藏在旧门锁'
    ],
    '床前明月光，': [
        '疑是地上霜', '低头思故乡', '入梦星河淌', '不敢抬头望', '一地碎银两', 
        '影子在对唱'
    ],
    // Round 3
    '无风的海，': [
        '暗涌在独白', '阳光在发呆', '潮声被云埋', '时间也停摆', '渔火映大地', 
        '往事浮上来'
    ],
    '纸飞机里，': [
        '藏着勇气机', '折梦的印记', '叠爱的秘密', '告白的战栗', '画童年游戏', 
        '攒半块橡皮', '偷改的歌词', '蔚蓝色序曲'
    ],
    '汽水咕噜，': [
        '夏天被解暑', '快乐在输出', '橘子味日出', '冰镇了汗珠', '同桌的赌注', 
        '第一口最酷', '嗝是感叹符', '拧开的音符', '美味也出炉'
    ],
    '欢喜的眼，': [
        '指尖的试探', '望见星满天', '春风在留言', '万物都新鲜', '苦味也变甜', 
        '未来在眼前', '忧伤被赦免', '故事没句点', '地图也伸延', '幸福在沉淀', 
        '抵万语千言', '脑海里浮现'
    ],
    '一笔带过，': [
        '往日的曲折', '岁月起了辙', '落款是沉默', '风干了承诺', '结痂的星火', 
        '曾一错再错', '别一无所获', '总起起落落', '谁抑扬顿挫', '人生是直播', 
        '空虚和寂寞'
    ],
    '我们唱着，': [
        '梦都被惊蛰', '世间喜乐多', '最平淡的歌', '不甘的选择', '妈我回来了', 
        '彼此舍不得', '岁月再见了', '青春它如河', '向前的火车', '人所怀念的'
    ],
    // Round 4
    '运用我的天赋，': [
        '管谁想法颠覆', '照亮我的前路', '为我自己造路', '无法停止脚步', '武装我的态度', 
        '送他一条末路', '省略所有付出', '搭配后天招数', '这上天的照顾', '准备脱颖而出'
    ],
    '琴键上透着光，': [
        '彩绘的玻璃窗', '蝴蝶张开翅膀', '心跳声在胸膛', '是希望的形状', '曲谱藏着愿望', 
        '叮叮当当作响', '从北方到南方', '是梦想在启航'
    ],
    '天色是有点暗，': [
        '气氛是有点蓝', '心中止水一般', '时间在被放慢', '没有时间伤感', '谎话自然而然', 
        '快乐是那样难'
    ],
    '心扑通扑通跳，': [
        '左眼皮也狂跳', '怎么庸人自扰', '无法控制眼角', '限制统统取消', '偶尔梦里拥抱', 
        '是你搭肩前邀', '回忆里总争吵', '脸上泛起红潮'
    ]
};

// （当前版本）下半句由玩家自由创作：不再使用"答案库/候选库"做硬性判定

// 预置 Rap 片段库（4-10 字）：用于"奖励式命中"（可直接判有效），不强制
// 包含从文档 Rhyme master_lyrics lib_round1 和 round2 提取的种子库中的下半句
const validSentences = [
    // Round 1 种子库：别来无恙
    '还在路上', '世人慌张', '碎银几两', '夜色茫茫', '跌跌撞撞', '学会坚强', 
    '铁石心肠', '夜梦家乡', '学着遗忘', '决不投降', '继续远航', '渴望飞翔', 
    '确定方向', '拒绝回望',
    // Round 1 种子库：快乐崇拜
    '快乐无害', '排山倒海', '太多期待', '肆意起来', '还要去爱', '百分之百', 
    '爱的年代', '爱的对白', '再站起来', '快乐摇摆', '开始明白', '爱不更改', 
    '浇灌未来', '任他丑怪', '来到现代',
    // Round 1 种子库：我不后悔
    '我无所谓', '做好准备', '错还是对', '问心无愧', '青春不褪', '头也不回', 
    '无路可退', '誓死不归', '此生无悔', '错也奉陪', '背影成碑',
    // Round 1 种子库：爱到尽头
    '覆水难收', '余温未留', '风满空袖', '魂断西楼', '何必强求', '泪酿成酒', 
    '放手是舟', '剧终幕收', '别再逗留', '重新开头',
    // Round 2 种子库：快刀斩乱麻
    '金戈伴铁马', '赤血染黄沙', '青春成白发', '江湖自潇洒', '意气趁年华', 
    '乱局中称霸', '谈笑定天涯',
    // Round 2 种子库：忘了你存在
    '有什么期待', '一个人走开', '气氛难释怀', '欢乐与悲哀', '哭得像小孩', 
    '为何缘是债', '过得很精彩', '拥挤的地带', '我热的发呆',
    // Round 2 种子库：普通或另类
    '讨厌或敬佩', '灵魂会调味', '开心就都对', '独特是年岁', '要用心体会', 
    '怕碰着同类', '剩痛苦眼泪', '伤痛会加倍', '不用管结尾', '我定义何为', 
    '向前别理会',
    // Round 2 种子库：时间如流水
    '一去不复回', '思念的滋味', '天天去回味', '快乐变虚伪', '用心去体会', 
    '有缘自相会', '今晚先碰杯', '不在乎是非', '劳燕各分飞', '往事已成灰',
    // Round 2 种子库：小城故事多
    '充满喜和乐', '只能对你说', '岁月慢慢磨', '泛起旧时波', '昨日开心过', 
    '最后剩沉默', '爱念仍未说', '花开又花落', '藏在旧门锁',
    // Round 2 种子库：床前明月光
    '疑是地上霜', '低头思故乡', '入梦星河淌', '不敢抬头望', '一地碎银两', 
    '影子在对唱',
    // Round 3 种子库：无风的海
    '暗涌在独白', '阳光在发呆', '潮声被云埋', '时间也停摆', '渔火映大地', 
    '往事浮上来',
    // Round 3 种子库：纸飞机里
    '藏着勇气机', '折梦的印记', '叠爱的秘密', '告白的战栗', '画童年游戏', 
    '攒半块橡皮', '偷改的歌词', '蔚蓝色序曲',
    // Round 3 种子库：汽水咕噜
    '夏天被解暑', '快乐在输出', '橘子味日出', '冰镇了汗珠', '同桌的赌注', 
    '第一口最酷', '嗝是感叹符', '拧开的音符', '美味也出炉',
    // Round 3 种子库：欢喜的眼
    '指尖的试探', '望见星满天', '春风在留言', '万物都新鲜', '苦味也变甜', 
    '未来在眼前', '忧伤被赦免', '故事没句点', '地图也伸延', '幸福在沉淀', 
    '抵万语千言', '脑海里浮现',
    // Round 3 种子库：一笔带过
    '往日的曲折', '岁月起了辙', '落款是沉默', '风干了承诺', '结痂的星火', 
    '曾一错再错', '别一无所获', '总起起落落', '谁抑扬顿挫', '人生是直播', 
    '空虚和寂寞',
    // Round 3 种子库：我们唱着
    '梦都被惊蛰', '世间喜乐多', '最平淡的歌', '不甘的选择', '妈我回来了', 
    '彼此舍不得', '岁月再见了', '青春它如河', '向前的火车', '人所怀念的',
    // Round 4 种子库：运用我的天赋
    '管谁想法颠覆', '照亮我的前路', '为我自己造路', '无法停止脚步', '武装我的态度', 
    '送他一条末路', '省略所有付出', '搭配后天招数', '这上天的照顾', '准备脱颖而出',
    // Round 4 种子库：琴键上透着光
    '彩绘的玻璃窗', '蝴蝶张开翅膀', '心跳声在胸膛', '是希望的形状', '曲谱藏着愿望', 
    '叮叮当当作响', '从北方到南方', '是梦想在启航',
    // Round 4 种子库：天色是有点暗
    '气氛是有点蓝', '心中止水一般', '时间在被放慢', '没有时间伤感', '谎话自然而然', 
    '快乐是那样难',
    // Round 4 种子库：心扑通扑通跳
    '左眼皮也狂跳', '怎么庸人自扰', '无法控制眼角', '限制统统取消', '偶尔梦里拥抱', 
    '是你搭肩前邀', '回忆里总争吵', '脸上泛起红潮'
];

// 基础中文词语与"伪词性"字典，用于句子合理性/语法/连贯性判断
// 仅覆盖常见搭配和 Rap 里高频用法，命中越多说明越像一句正常的话
// 已扩展包含种子库中出现的词语
const wordLexicon = {
    // 名词 / 名词性短语
    '兄弟': 'noun',
    '兄弟们': 'noun',
    '世界': 'noun',
    '节奏': 'noun',
    '梦想': 'noun',
    '夜色': 'noun',
    '街头': 'noun',
    '舞台': 'noun',
    '麦克': 'noun',
    '现场': 'noun',
    '观众': 'noun',
    '眼神': 'noun',
    '心事': 'noun',
    '故事': 'noun',
    '城市': 'noun',
    '未来': 'noun',
    '灯光': 'noun',
    '少年': 'noun',
    '灵魂': 'noun',
    '韵脚': 'noun',
    '歌词': 'noun',
    '节拍': 'noun',
    '心跳': 'noun',
    '烟雾': 'noun',
    '耳机': 'noun',
    '人海': 'noun',
    '信号': 'noun',
    // 从种子库添加的名词（Round 1）
    '世人': 'noun',
    '家乡': 'noun',
    '方向': 'noun',
    '年代': 'noun',
    '对白': 'noun',
    '背影': 'noun',
    '余温': 'noun',
    '空袖': 'noun',
    '西楼': 'noun',
    '碎银': 'noun',
    '心肠': 'noun',
    '青春': 'noun',
    // 从种子库添加的名词（Round 2）
    '金戈': 'noun',
    '铁马': 'noun',
    '赤血': 'noun',
    '黄沙': 'noun',
    '白发': 'noun',
    '江湖': 'noun',
    '年华': 'noun',
    '天涯': 'noun',
    '期待': 'noun',
    '释怀': 'noun',
    '悲哀': 'noun',
    '小孩': 'noun',
    '地带': 'noun',
    '年岁': 'noun',
    '同类': 'noun',
    '眼泪': 'noun',
    '结尾': 'noun',
    '滋味': 'noun',
    '回味': 'noun',
    '虚伪': 'noun',
    '相会': 'noun',
    '碰杯': 'noun',
    '是非': 'noun',
    '分飞': 'noun',
    '成灰': 'noun',
    '沉默': 'noun',
    '门锁': 'noun',
    '地上霜': 'noun',
    '故乡': 'noun',
    '星河': 'noun',
    '碎银两': 'noun',

    // 动词 / 动作短语
    '开车': 'verb',
    '奔跑': 'verb',
    '起飞': 'verb',
    '微笑': 'verb',
    '前进': 'verb',
    '爆炸': 'verb',
    '点燃': 'verb',
    '守住': 'verb',
    '追赶': 'verb',
    '跨过': 'verb',
    '写下': 'verb',
    '唱完': 'verb',
    '放下': 'verb',
    '抬头': 'verb',
    '低头': 'verb',
    '呼吸': 'verb',
    '跳舞': 'verb',
    '闪耀': 'verb',
    '坚持': 'verb',
    '燃烧': 'verb',
    '爆发': 'verb',
    '走开': 'verb',
    '回来': 'verb',
    // 从种子库添加的动词
    '慌张': 'verb',
    '坚强': 'verb',
    '遗忘': 'verb',
    '投降': 'verb',
    '远航': 'verb',
    '飞翔': 'verb',
    '回望': 'verb',
    '无害': 'verb',
    '倒海': 'verb',
    '期待': 'verb',
    '起来': 'verb',
    '去爱': 'verb',
    '摇摆': 'verb',
    '明白': 'verb',
    '更改': 'verb',
    '浇灌': 'verb',
    '准备': 'verb',
    '无愧': 'verb',
    '不褪': 'verb',
    '不归': 'verb',
    '无悔': 'verb',
    '奉陪': 'verb',
    '难收': 'verb',
    '未留': 'verb',
    '强求': 'verb',
    '成酒': 'verb',
    '是舟': 'verb',
    '幕收': 'verb',
    '逗留': 'verb',
    '开头': 'verb',
    '继续': 'verb',
    '渴望': 'verb',
    '确定': 'verb',
    '拒绝': 'verb',
    '排山': 'verb',
    '肆意': 'verb',
    '站起': 'verb',
    '开始': 'verb',
    '来到': 'verb',
    '做好': 'verb',
    '还是': 'verb',
    '问心': 'verb',
    '也不': 'verb',
    '可退': 'verb',
    '誓死': 'verb',
    '成碑': 'verb',
    '覆水': 'verb',
    '风满': 'verb',
    '魂断': 'verb',
    '泪酿': 'verb',
    '放手': 'verb',
    '别再': 'verb',
    '重新': 'verb',
    // 从种子库添加的动词（Round 2）
    '斩乱麻': 'verb',
    '伴铁马': 'verb',
    '染黄沙': 'verb',
    '成白发': 'verb',
    '自潇洒': 'verb',
    '趁年华': 'verb',
    '中称霸': 'verb',
    '定天涯': 'verb',
    '走开': 'verb',
    '难释怀': 'verb',
    '像小孩': 'verb',
    '是债': 'verb',
    '热的发呆': 'verb',
    '会调味': 'verb',
    '就都对': 'verb',
    '用心体会': 'verb',
    '碰着同类': 'verb',
    '会加倍': 'verb',
    '管结尾': 'verb',
    '定义何为': 'verb',
    '别理会': 'verb',
    '不复回': 'verb',
    '去回味': 'verb',
    '变虚伪': 'verb',
    '去体会': 'verb',
    '自相会': 'verb',
    '先碰杯': 'verb',
    '各分飞': 'verb',
    '已成灰': 'verb',
    '对你说': 'verb',
    '慢慢磨': 'verb',
    '起旧时波': 'verb',
    '开心过': 'verb',
    '剩沉默': 'verb',
    '仍未说': 'verb',
    '又花落': 'verb',
    '在旧门锁': 'verb',
    '是地上霜': 'verb',
    '思故乡': 'verb',
    '入梦星河淌': 'verb',
    '抬头望': 'verb',
    '在对唱': 'verb',

    // 形容词
    '茫茫': 'adj',
    '坚强': 'adj',
    '慌张': 'adj',
    '快乐': 'adj',
    '明白': 'adj',
    '现代': 'adj',
    '无所谓': 'adj',
    '无愧': 'adj',
    '无悔': 'adj',
    // 从种子库添加的形容词（Round 2）
    '潇洒': 'adj',
    '精彩': 'adj',
    '虚伪': 'adj',
    '独特': 'adj',

    // 三字动宾/动补
    '写故事': 'verb',
    '追梦想': 'verb',
    '守承诺': 'verb',
    '点灯光': 'verb',
    '追节奏': 'verb',
    // 从种子库添加的三字词
    '在路上': 'verb',
    '几两': 'noun',
    '撞撞': 'verb',
    '学会': 'verb',
    '学着': 'verb',
    '决不': 'verb',
    '百分之': 'noun',
    '站起来': 'verb',
    '无所谓': 'adj',
    '还是对': 'verb',
    '不褪': 'verb',
    '也不回': 'verb',
    '路可退': 'verb',
    '死不归': 'verb',
    '也奉陪': 'verb',
    '水难收': 'verb',
    '温未留': 'verb',
    '满空袖': 'verb',
    '断西楼': 'verb',
    '必强求': 'verb',
    '酿成酒': 'verb',
    '终幕收': 'verb',
    '再逗留': 'verb',
    '新开头': 'verb',
    // 从种子库添加的三字词（Round 2）
    '斩乱麻': 'verb',
    '伴铁马': 'verb',
    '染黄沙': 'verb',
    '成白发': 'verb',
    '自潇洒': 'verb',
    '趁年华': 'verb',
    '中称霸': 'verb',
    '定天涯': 'verb',
    '难释怀': 'verb',
    '像小孩': 'verb',
    '是债': 'verb',
    '热的发呆': 'verb',
    '会调味': 'verb',
    '就都对': 'verb',
    '用心体会': 'verb',
    '碰着同类': 'verb',
    '会加倍': 'verb',
    '管结尾': 'verb',
    '定义何为': 'verb',
    '别理会': 'verb',
    '不复回': 'verb',
    '去回味': 'verb',
    '变虚伪': 'verb',
    '去体会': 'verb',
    '自相会': 'verb',
    '先碰杯': 'verb',
    '各分飞': 'verb',
    '已成灰': 'verb',
    '对你说': 'verb',
    '慢慢磨': 'verb',
    '起旧时波': 'verb',
    '开心过': 'verb',
    '剩沉默': 'verb',
    '仍未说': 'verb',
    '又花落': 'verb',
    '在旧门锁': 'verb',
    '是地上霜': 'verb',
    '思故乡': 'verb',
    '入梦星河淌': 'verb',
    '抬头望': 'verb',
    '在对唱': 'verb',

    // 代词
    '我': 'pronoun',
    '你': 'pronoun',
    '他': 'pronoun',
    '她': 'pronoun',
    '它': 'pronoun',
    '我们': 'pronoun',
    '他们': 'pronoun',
    '自己': 'pronoun',

    // 常用虚词
    '的': 'particle',
    '了': 'particle',
    '就': 'particle',
    '在': 'particle',
    '还': 'particle',
    '也': 'particle',
    '又': 'particle',
    '都': 'particle',
    '和': 'particle',
    '跟': 'particle',
    '不': 'particle',
    '再': 'particle',
    '别': 'particle'
};

// 押韵字典（按十三辙分类，支持单押判断）
// 十三辙分组：
// 1. 发花辙：a、ia、ua
// 2. 梭波辙：o、e、uo
// 3. 乜斜辙：ie、üe
// 4. 姑苏辙：u
// 5. 一七辙：i、ü、er
// 6. 怀来辙：ai、uai
// 7. 灰堆辙：ei、ui
// 8. 遥条辙：ao、iao
// 9. 油求辙：ou、iu
// 10. 言前辙：an、ian、uan、üan
// 11. 人辰辙：en、in、un、ün
// 12. 江阳辙：ang、iang、uang
// 13. 中东辙：eng、ing、ong

// 韵母到十三辙的映射
const rhymeToZhe = {
    // 发花辙：a、ia、ua
    'a': '发花辙', 'ia': '发花辙', 'ua': '发花辙',
    // 梭波辙：o、e、uo
    'o': '梭波辙', 'e': '梭波辙', 'uo': '梭波辙',
    // 乜斜辙：ie、üe
    'ie': '乜斜辙', 'üe': '乜斜辙', 'ue': '乜斜辙',
    // 姑苏辙：u
    'u': '姑苏辙',
    // 一七辙：i、ü、er
    'i': '一七辙', 'ü': '一七辙', 'er': '一七辙',
    // 怀来辙：ai、uai
    'ai': '怀来辙', 'uai': '怀来辙',
    // 灰堆辙：ei、ui
    'ei': '灰堆辙', 'ui': '灰堆辙',
    // 遥条辙：ao、iao
    'ao': '遥条辙', 'iao': '遥条辙',
    // 油求辙：ou、iu
    'ou': '油求辙', 'iu': '油求辙',
    // 言前辙：an、ian、uan、üan
    'an': '言前辙', 'ian': '言前辙', 'uan': '言前辙', 'üan': '言前辙',
    // 人辰辙：en、in、un、ün
    'en': '人辰辙', 'in': '人辰辙', 'un': '人辰辙', 'ün': '人辰辙',
    // 江阳辙：ang、iang、uang
    'ang': '江阳辙', 'iang': '江阳辙', 'uang': '江阳辙',
    // 中东辙：eng、ing、ong
    'eng': '中东辙', 'ing': '中东辙', 'ong': '中东辙'
};

// 按韵母分类的字库（用于查找字的韵母）
const rhymeGroupsByYunmu = {
    'a': ['啊', '家', '花', '发', '大', '他', '她', '它', '话', '画', '法', '打', '拿', '妈', '爸', '八', '麻', '马', '沙', '洒', '华', '霸', '涯'],
    'ai': ['来', '开', '爱', '白', '才', '台', '海', '外', '再', '带', '该', '排', '菜', '在', '代', '拜', '待', '怀', '哀', '孩', '债', '彩', '呆'],
    'an': ['安', '看', '满', '三', '天', '年', '前', '间', '边', '先', '见', '面', '点', '线', '变'],
    'ang': ['长', '方', '光', '场', '上', '放', '想', '相', '向', '强', '量', '将', '让', '唱', '望', '张', '两', '乡', '忘', '翔', '肠', '航', '茫', '降', '恙', '霜', '淌'],
    'ao': ['好', '到', '道', '老', '早', '高', '报', '草', '找', '跑', '号', '条', '小', '要', '笑'],
    'e': ['了', '的', '个', '和', '说', '着', '这', '得', '可', '么', '热', '乐', '色', '车', '则'],
    'i': ['一', '你', '里', '地', '起', '去', '气', '机', '力', '意', '义', '已', '以', '比', '西'],
    'ian': ['间', '边', '先', '见', '面', '点', '线', '变', '天', '年', '前', '连', '言', '现', '选'],
    'iang': ['想', '相', '向', '强', '量', '将', '让', '场', '长', '方', '光', '上', '放', '唱', '望'],
    'iao': ['小', '要', '笑', '跳', '条', '叫', '好', '到', '道', '老', '早', '高', '报', '草', '找'],
    'ie': ['些', '写', '节', '解', '界', '接', '结', '别', '贴', '切'],
    'in': ['心', '新', '近', '进', '尽', '金', '今', '音', '因', '引', '信', '品', '民', '林', '门'],
    'ing': ['情', '轻', '清', '请', '听', '定', '明', '名', '命', '行', '星', '醒', '应', '平', '静'],
    'iu': ['流', '留', '六', '九', '就', '求', '球', '秋', '久', '旧', '友', '有', '又', '由', '游'],
    'o': ['我', '过', '做', '说', '着', '这', '得', '可', '么', '热', '乐', '色', '车', '则', '和', '多', '磨', '波', '默', '落', '锁'],
    'ong': ['中', '同', '动', '空', '工', '公', '红', '红', '总', '从', '容', '用', '龙', '重', '共'],
    'ou': ['后', '头', '走', '手', '口', '够', '收', '收', '受', '厚', '够', '流', '留', '六', '九'],
    'u': ['不', '出', '处', '路', '主', '住', '书', '数', '图', '度', '物', '无', '五', '目', '木'],
    'ua': ['话', '画', '花', '发', '大', '他', '她', '它', '法', '打', '拿', '妈', '爸', '八', '家'],
    'uai': ['外', '快', '坏', '来', '开', '爱', '白', '才', '台', '海', '再', '带', '该', '排', '菜'],
    'uan': ['完', '玩', '万', '转', '传', '关', '管', '换', '还', '看', '满', '三', '天', '年', '前'],
    'uang': ['光', '广', '装', '双', '长', '方', '场', '上', '放', '想', '相', '向', '强', '量', '将', '慌', '撞'],
    'ui': ['会', '回', '对', '队', '推', '最', '随', '追', '水', '谁', '累', '类', '给', '被', '内', '悔', '备', '归', '愧', '碑', '褪', '谓', '退', '陪', '敬', '佩', '味', '岁', '体', '同', '泪', '倍', '尾', '为', '理', '滋', '虚', '伪', '杯', '非', '飞', '灰'],
    'un': ['文', '问', '温', '门', '本', '分', '跟', '根', '很', '真', '深', '身', '人', '任', '认'],
    'uo': ['过', '做', '我', '说', '着', '这', '得', '可', '么', '热', '乐', '色', '车', '则', '和'],
};

// 按十三辙合并的字库（用于高亮和匹配）
const rhymeGroups = {
    '发花辙': [], '梭波辙': [], '乜斜辙': [], '姑苏辙': [], '一七辙': [],
    '怀来辙': [], '灰堆辙': [], '遥条辙': [], '油求辙': [], '言前辙': [],
    '人辰辙': [], '江阳辙': [], '中东辙': []
};

// 初始化：将韵母字库合并到对应的辙
for (let yunmu in rhymeGroupsByYunmu) {
    const zhe = rhymeToZhe[yunmu];
    if (zhe && rhymeGroups[zhe]) {
        // 合并去重
        const chars = rhymeGroupsByYunmu[yunmu];
        chars.forEach(char => {
            if (!rhymeGroups[zhe].includes(char)) {
                rhymeGroups[zhe].push(char);
            }
        });
    }
}

// 获取字的韵母（简化版），返回对应的十三辙
function getRhymeGroup(char) {
    // 先在韵母字库中查找
    for (let yunmu in rhymeGroupsByYunmu) {
        if (rhymeGroupsByYunmu[yunmu].includes(char)) {
            return rhymeToZhe[yunmu] || null;
        }
    }
    return null;
}

function getAllChars() {
    // 使用按韵脚去重且保证不少于 5 个的字池，避免重复字过多
    const allChars = [];
    for (let group in rhymeGroups) {
        allChars.push(...getRhymeChars(group));
    }
    return allChars;
}

// 获取指定韵脚的字池，去重且至少保证返回 5 个（若原库不足则补充预设字）
function getRhymeChars(rhymeGroup) {
    const baseSet = new Set(rhymeGroups[rhymeGroup] || []);
    const base = Array.from(baseSet);
    const minSize = 5; // “5个以上”→ 至少 5 个
    if (base.length >= minSize) return base;

    const fallback = ['啊', '呀', '吧', '嘛', '啦', '呢', '么', '呗']; // 通用口语尾音兜底
    for (const ch of fallback) {
        if (baseSet.size >= minSize) break;
        if (!baseSet.has(ch)) {
            baseSet.add(ch);
        }
    }
    return Array.from(baseSet);
}

function getCurrentLevel() {
    return activeLevel;
}

function setUpperLineUI() {
    const upperEl = document.getElementById('upper-line');
    const levelEl = document.getElementById('level-indicator');
    const levelNumber = currentLevelIndex + 1;
    
    // 根据关卡索引确定字数要求
    const wordReq = LEVEL_CONFIG.getWordRequirement(currentLevelIndex);
    const displayText = `${wordReq.upperCount}+${wordReq.lowerCount}`;
    
    if (levelEl) levelEl.textContent = `第 ${levelNumber} 关 ${displayText}`;
    // 更新upper-line时会调用updateUpperLineWithSelection，这里只设置基础内容
    if (upperEl && activeLevel) {
        updateUpperLineWithSelection();
    }
}

// 更新upper-line，显示上半句和选中的下半句（如果有）
function updateUpperLineWithSelection() {
    const upperEl = document.getElementById('upper-line');
    if (!upperEl || !activeLevel) return;
    
    const chars = currentSentenceCells.map(({ row, col }) => grid[row][col]);
    const selectedText = chars.join('');
    
    // 生成横线（下划线）
    const underlineLength = GAME_TEXT_CONFIG.underline.length || 20;
    const underline = '_'.repeat(underlineLength);
    
    // 使用HTML结构：上半句 + 下划线，选中的文字显示在横线上方（红色）
    if (selectedText) {
        upperEl.innerHTML = `${activeLevel.upperLine}<span class="selected-text-above-line">${selectedText}</span>${underline}`;
    } else {
        upperEl.innerHTML = `${activeLevel.upperLine}${underline}`;
    }
}

// 更新步数显示
function updateStepsDisplay() {
    const stepsEl = document.getElementById('steps-indicator');
    if (stepsEl) {
        stepsEl.value = remainingSteps.toString();
        // 步数不足时显示警告样式
        if (remainingSteps <= 10) {
            stepsEl.classList.add('steps-warning');
        } else {
            stepsEl.classList.remove('steps-warning');
        }
        if (remainingSteps === 0) {
            stepsEl.classList.add('steps-danger');
        } else {
            stepsEl.classList.remove('steps-danger');
        }
    }
}

// 更新韵部解锁进度显示
function updateRhymeProgressDisplay() {
    const progressEl = document.getElementById('rhyme-progress-indicator');
    if (progressEl) {
        const unlockedCount = unlockedRhymeGroups.size;
        const totalCount = 13;
        progressEl.textContent = `${unlockedCount}/${totalCount}辙`;
        
        // 检查是否达到13个韵部（通关）
        if (unlockedCount >= totalCount) {
            // 游戏通关
            setTimeout(() => {
                showResultDialog(
                    '恭喜通关！',
                    '你已经解锁了全部13个韵部，游戏通关！',
                    'success'
                );
                isGameWon = true;
                window.pendingGameWin = true;
            }, 500);
        }
    }
}

// 消耗步数
function consumeSteps(count) {
    if (remainingSteps < count) {
        // 步数不足
        const dialogConfig = INTERACTION_CONFIG.dialog.stepsInsufficient;
        showResultDialog(
            dialogConfig.title,
            dialogConfig.message.replace('{required}', count).replace('{remaining}', remainingSteps),
            'error'
        );
        return false;
    }
    remainingSteps -= count;
    updateStepsDisplay();
    
    // 检查是否步数用尽
    if (remainingSteps === 0) {
        // 游戏失败时暂停背景音乐
        const bgMusic = document.getElementById('bg-music');
        if (bgMusic) {
            bgMusic.pause();
        }
        setTimeout(() => {
            const dialogConfig = INTERACTION_CONFIG.dialog.gameOver;
            showResultDialog(dialogConfig.title, dialogConfig.message, 'error');
            window.pendingGameOver = true;
        }, 100);
    }
    
    return true;
}

// 创建随机关卡：根据关卡索引从对应的 round 中抽取上半句
function generateRandomLevel() {
    // 根据关卡索引确定从哪个 round 抽取（关卡索引从0开始，round从1开始）
    const roundNumber = currentLevelIndex + 1;
    const upperLines = rhymeUpperLinesByRound[roundNumber] || [];
    
    if (upperLines.length === 0) {
        // 如果该 round 还没有数据，返回null（后续可以显示提示或使用默认值）
        return null;
    }
    
    // 从对应 round 中随机选择一个上半句
    const upperLine = upperLines[Math.floor(Math.random() * upperLines.length)];
    
    // 获取该上半句对应的韵脚分组
    const rhymeGroup = getRhymeGroupForUpperLine(upperLine);

    return {
        upperLine,
        rhymeGroup
    };
}

// 初始化关卡（生成可解棋盘）
function initLevel() {
    isGameWon = false;
    currentSentenceCells = [];
    selectedCell = null;
    selectedRowOrCol = null; // 清除行/列选择
    correctMarkCell = null; // 清除之前的正确标记
    // 每关重置步数（每关都从50开始）
    remainingSteps = MAX_STEPS;
    // 每一关开始都默认是交换模式
    isSwapMode = true;
    const checkbox = document.getElementById('mode-toggle-input');
    const switchLabel = document.getElementById('mode-toggle-btn');
    if (checkbox && switchLabel) {
        checkbox.checked = false; // 未选中表示交换模式
        switchLabel.classList.remove('checked');
    }
    activeLevel = generateRandomLevel();
    
    setUpperLineUI();
    updateStepsDisplay();
    buildGridForLevel(getCurrentLevel());
    renderGrid();
    updateCurrentSentenceDisplay();
}

// 生成 8x8 棋盘：随机填充，并保证至少 5 个目标韵脚字（用于高亮提示）
// 如果上半句有对应的下半句种子库，则确保棋盘包含所有种子库中的汉字
// 支持"的地得""常""了""着"这些词可以重复出现，但一关中同一个字不超过3个
function buildGridForLevel(level) {
    grid = [];
    lastAnswerPath = [];

    const targetRhyme = getExpectedRhymeGroupForLevel(level);
    const upperLine = level.upperLine || '';

    // 检查是否有对应的下半句种子库
    const lowerSeeds = upperToLowerSeeds[upperLine] || [];
    
    // 提取所有下半句种子库中的汉字（允许重复，但需要统计频率）
    const seedCharsList = [];
    const seedCharCounts = new Map(); // 统计每个字符在种子库中出现的次数
    
    lowerSeeds.forEach(sentence => {
        for (let char of sentence) {
            if (/[\u4e00-\u9fff]/.test(char)) {  // 只保留中文字符
                seedCharsList.push(char);
                seedCharCounts.set(char, (seedCharCounts.get(char) || 0) + 1);
            }
        }
    });
    
    // 获取种子库中的所有唯一字符
    const seedCharsSet = new Set(seedCharsList);
    const seedChars = Array.from(seedCharsSet);

    // 目标韵脚字：去重且至少 5 个
    const targetChars = targetRhyme ? getRhymeChars(targetRhyme) : [];

    // 全局字库：从所有韵脚字库中去重汇总
    const allCharsSet = new Set();
    for (let group in rhymeGroups) {
        const chars = getRhymeChars(group);
        chars.forEach(ch => allCharsSet.add(ch));
    }
    const allChars = Array.from(allCharsSet);

    // 每局游戏从韵脚字库中随机抽取的 64 个汉字
    const gridChars = [];
    const charCounts = new Map(); // 统计棋盘中每个字符的出现次数
    
    // 允许重复的特殊字符："的地得""常""了""着"
    const allowedRepeatChars = new Set(['的', '地', '得', '常', '了', '着']);
    const maxRepeats = 3; // 同一个字最多重复3次
    
    // 辅助函数：检查是否可以添加某个字符
    const canAddChar = (char) => {
        const currentCount = charCounts.get(char) || 0;
        // 如果是允许重复的特殊字符，最多可以重复maxRepeats次
        if (allowedRepeatChars.has(char)) {
            return currentCount < maxRepeats;
        }
        // 普通字符：如果已经在棋盘中出现过，不能重复（除非是种子库中必需的）
        return currentCount === 0;
    };
    
    // 辅助函数：添加字符到棋盘
    const addChar = (char) => {
        gridChars.push(char);
        charCounts.set(char, (charCounts.get(char) || 0) + 1);
    };

    // 1. 优先保证包含所有下半句种子库中的汉字（降低游戏难度）
    // 对于种子库中的字符，确保至少出现一次（如果是允许重复的特殊字符，可以出现多次）
    if (seedChars.length > 0) {
        seedChars.forEach(ch => {
            // 确保种子库中的字符至少出现一次
            if (gridChars.length < 64) {
                addChar(ch);
            }
        });
        
        // 对于允许重复的特殊字符，如果种子库中需要多次，可以再添加（但不超过maxRepeats次）
        for (const [char, seedCount] of seedCharCounts.entries()) {
            if (allowedRepeatChars.has(char)) {
                const currentCount = charCounts.get(char) || 0;
                // 如果种子库中需要多次，且当前数量未达到上限，可以继续添加
                const neededCount = Math.min(seedCount, maxRepeats);
                while (charCounts.get(char) < neededCount && gridChars.length < 64) {
                    addChar(char);
                }
            }
        }
    }

    // 2. 保证至少 5 个"符合本关韵脚"的不重复汉字（如果还没有足够的话）
    if (targetChars.length > 0) {
        const usedTargetSet = new Set();
        targetChars.forEach(ch => {
            if (canAddChar(ch) && gridChars.length < 64) {
                addChar(ch);
                usedTargetSet.add(ch);
            }
        });
        
        // 如果还不足5个目标韵脚字，且允许重复特殊字符，可以添加
        if (usedTargetSet.size < 5) {
            const shuffledTarget = [...targetChars].sort(() => Math.random() - 0.5);
            for (const ch of shuffledTarget) {
        if (gridChars.length >= 64) break;
                if (canAddChar(ch) && !usedTargetSet.has(ch)) {
                    addChar(ch);
                    usedTargetSet.add(ch);
                }
            }
        }
    }

    // 3. 用其他不重复汉字填满到 64 个
    const usedSet = new Set(gridChars);
    const remaining = allChars.filter(ch => !usedSet.has(ch) && canAddChar(ch));
    const shuffledRemaining = remaining.sort(() => Math.random() - 0.5);

    for (let i = 0; i < shuffledRemaining.length && gridChars.length < 64; i++) {
        if (canAddChar(shuffledRemaining[i])) {
            addChar(shuffledRemaining[i]);
        }
    }

    // 4. 如果总字库本身不足 64 个，允许重复，做兜底填充
    // 优先重复允许重复的特殊字符，然后是种子库中的字，最后是全局字库
    while (gridChars.length < 64) {
        let added = false;
        
        // 优先重复允许重复的特殊字符
        for (const ch of allowedRepeatChars) {
            if (canAddChar(ch) && gridChars.length < 64) {
                addChar(ch);
                added = true;
                break;
            }
        }
        
        if (added) continue;
        
        // 然后重复种子库中的字符（如果允许重复）
        if (seedChars.length > 0) {
            const shuffledSeeds = [...seedChars].sort(() => Math.random() - 0.5);
            for (const ch of shuffledSeeds) {
                if (canAddChar(ch) && gridChars.length < 64) {
                    addChar(ch);
                    added = true;
                    break;
                }
            }
        }
        
        if (added) continue;
        
        // 最后从全局字库中随机选择（如果允许重复）
        if (allChars.length > 0) {
            const shuffledAll = [...allChars].sort(() => Math.random() - 0.5);
            for (const ch of shuffledAll) {
                if (canAddChar(ch) && gridChars.length < 64) {
                    addChar(ch);
                    added = true;
                    break;
                }
            }
        }
        
        // 如果没有任何字符可以添加，退出循环
        if (!added) break;
    }

    // 打乱顺序，使游戏更有挑战性
    const shuffled = gridChars.sort(() => Math.random() - 0.5);

    // 将一维数组写入 8×8 棋盘
    let idx = 0;
    for (let i = 0; i < 8; i++) {
        grid[i] = [];
        for (let j = 0; j < 8; j++) {
            grid[i][j] = shuffled[idx++];
        }
    }
}

// legacy（旧：答案嵌入路径）现在不再需要 generateRandomPath

// 确保棋盘内至少包含指定韵脚的若干字，尽量不覆盖答案路径
function ensureRhymeCoverage(rhymeGroup, minCount) {
    if (!rhymeGroup) return;
    const pool = getRhymeChars(rhymeGroup);
    const isInPath = new Set(lastAnswerPath.map(p => `${p.row},${p.col}`)); // 目前为空，仅保留兼容

    const currentCount = countRhymeCharsInGrid(rhymeGroup);
    if (currentCount >= minCount) return;

    let needed = minCount - currentCount;
    const candidates = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const key = `${i},${j}`;
            if (isInPath.has(key)) continue; // 避免覆盖答案路径
            candidates.push({ row: i, col: j });
        }
    }
    // 若可选位置不足，也允许覆盖（极端情况）
    if (candidates.length === 0) return;

    while (needed > 0 && candidates.length > 0) {
        const idx = Math.floor(Math.random() * candidates.length);
        const { row, col } = candidates.splice(idx, 1)[0];
        const ch = pool[Math.floor(Math.random() * pool.length)];
        grid[row][col] = ch;
        needed--;
    }
}

function countRhymeCharsInGrid(rhymeGroup) {
    let cnt = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (getRhymeGroup(grid[i][j]) === rhymeGroup) cnt++;
        }
    }
    return cnt;
}
// 渲染网格
function renderGrid() {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';
    const expectedRhyme = getExpectedRhymeGroupForLevel(getCurrentLevel());
    
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.textContent = grid[i][j];
            cell.dataset.row = i;
            cell.dataset.col = j;
            // 符合韵脚的字高亮
            const cellRhyme = getRhymeGroup(grid[i][j]);
            if (expectedRhyme && cellRhyme === expectedRhyme) {
                cell.classList.add('rhyme-highlight');
            }
            // 交换模式下，已选中格子高亮
            if (selectedCell && selectedCell.row === i && selectedCell.col === j) {
                cell.classList.add('selected');
            }
            // 选中的行/列高亮
            if (selectedRowOrCol) {
                if (selectedRowOrCol.type === 'row' && selectedRowOrCol.index === i) {
                    cell.classList.add('row-selected');
                } else if (selectedRowOrCol.type === 'col' && selectedRowOrCol.index === j) {
                    cell.classList.add('col-selected');
                }
            }
            // 显示正确标记
            if (correctMarkCell && correctMarkCell.row === i && correctMarkCell.col === j) {
                const markContainer = document.createElement('div');
                markContainer.className = 'correct-mark-container';
                const checkmark = document.createElement('div');
                checkmark.className = 'correct-mark-checkmark';
                markContainer.appendChild(checkmark);
                cell.appendChild(markContainer);
            }
            cell.addEventListener('click', () => handleCellClick(i, j));
            container.appendChild(cell);
        }
    }
    
    // 渲染行/列手柄（仅在交换模式下显示）
    // 使用requestAnimationFrame确保DOM更新后再计算位置
    if (isSwapMode) {
        requestAnimationFrame(() => {
            renderHandles();
        });
    } else {
        // 非交换模式下隐藏手柄
        const rowHandles = document.getElementById('row-handles');
        const colHandles = document.getElementById('col-handles');
        if (rowHandles) rowHandles.innerHTML = '';
        if (colHandles) colHandles.innerHTML = '';
    }
}

// 渲染行/列手柄和交换按钮
function renderHandles() {
    // 获取网格容器的实际尺寸，用于精确对齐
    const gridContainer = document.getElementById('grid-container');
    if (!gridContainer) return;
    
    const gridRect = gridContainer.getBoundingClientRect();
    const padding = INTERACTION_CONFIG.grid.padding;
    const gap = INTERACTION_CONFIG.grid.gap;
    const rows = INTERACTION_CONFIG.grid.rows;
    const cols = INTERACTION_CONFIG.grid.cols;
    
    // 渲染行交换按钮（左侧，位于两行之间）
    const rowHandlesContainer = document.getElementById('row-handles');
    if (rowHandlesContainer) {
        rowHandlesContainer.innerHTML = '';
        // 设置容器高度与grid-container匹配
        rowHandlesContainer.style.height = `${gridRect.height}px`;
        // 计算每行的高度
        const availableHeight = gridRect.height - padding * 2 - gap * (rows - 1);
        const cellHeight = availableHeight / rows;
        
        const rowConfig = INTERACTION_CONFIG.handles.rowSwap;
        for (let i = 0; i < rows - 1; i++) {
            const swapBtn = document.createElement('div');
            swapBtn.className = rowConfig.className;
            swapBtn.dataset.rowIndex = i;
            swapBtn.title = rowConfig.titleTemplate
                .replace('{row1}', i + 1)
                .replace('{row2}', i + 2)
                .replace('{steps}', rowConfig.steps);
            swapBtn.innerHTML = rowConfig.icon;
            swapBtn.style.width = `${rowConfig.width}px`;
            swapBtn.style.height = `${rowConfig.height}px`;
            swapBtn.style.fontSize = `${rowConfig.fontSize}px`;
            // 计算按钮位置：第i行的底部 + gap/2 + 单独设置的Y轴偏移值
            const individualYOffset = (rowConfig.individualOffsets && rowConfig.individualOffsets[i]) || 0;
            const individualXOffset = (rowConfig.individualXOffsets && rowConfig.individualXOffsets[i]) || 0;
            const topPosition = padding + (i + 1) * cellHeight + i * gap + gap / 2 + individualYOffset;
            swapBtn.style.position = 'absolute';
            swapBtn.style.top = `${topPosition}px`;
            // 行手柄的X轴偏移：相对于row-handles容器的左侧，默认在容器右侧（靠近网格）
            // row-handles容器宽度为40px，按钮宽度为30px，默认位置应该在右侧
            const defaultLeft = 40 - 30; // 容器宽度 - 按钮宽度，使按钮靠右
            swapBtn.style.left = `${defaultLeft + individualXOffset}px`;
            swapBtn.style.transform = 'translateY(-50%)';
            swapBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                handleRowSwap(i, i + 1);
            });
            rowHandlesContainer.appendChild(swapBtn);
        }
    }
    
    // 渲染列交换按钮（上方，位于两列之间）
    const colHandlesContainer = document.getElementById('col-handles');
    if (colHandlesContainer) {
        colHandlesContainer.innerHTML = '';
        // 设置容器宽度与grid-container匹配
        colHandlesContainer.style.width = `${gridRect.width}px`;
        // 计算每列的宽度
        const availableWidth = gridRect.width - padding * 2 - gap * (cols - 1);
        const cellWidth = availableWidth / cols;
        
        const colConfig = INTERACTION_CONFIG.handles.colSwap;
        for (let j = 0; j < cols - 1; j++) {
            const swapBtn = document.createElement('div');
            swapBtn.className = colConfig.className;
            swapBtn.dataset.colIndex = j;
            swapBtn.title = colConfig.titleTemplate
                .replace('{col1}', j + 1)
                .replace('{col2}', j + 2)
                .replace('{steps}', colConfig.steps);
            swapBtn.innerHTML = colConfig.icon;
            swapBtn.style.width = `${colConfig.width}px`;
            swapBtn.style.height = `${colConfig.height}px`;
            swapBtn.style.fontSize = `${colConfig.fontSize}px`;
            // 计算按钮位置：第j列的右侧 + gap/2 + 单独设置的X轴偏移值
            const individualXOffset = (colConfig.individualOffsets && colConfig.individualOffsets[j]) || 0;
            const individualYOffset = (colConfig.individualYOffsets && colConfig.individualYOffsets[j]) || 0;
            const leftPosition = padding + (j + 1) * cellWidth + j * gap + gap / 2 + individualXOffset;
            swapBtn.style.position = 'absolute';
            swapBtn.style.left = `${leftPosition}px`;
            // 列手柄的Y轴偏移：相对于col-handles容器的顶部，默认在容器底部（靠近网格）
            // col-handles容器高度为40px，按钮高度为30px，默认位置应该在底部
            const defaultTop = 40 - 30; // 容器高度 - 按钮高度，使按钮靠下
            swapBtn.style.top = `${defaultTop + individualYOffset}px`;
            swapBtn.style.transform = 'translateX(-50%)';
            swapBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                handleColSwap(j, j + 1);
            });
            colHandlesContainer.appendChild(swapBtn);
        }
    }
}

// 处理行交换
function handleRowSwap(row1, row2) {
    if (remainingSteps === 0) {
        updateMessage(INTERACTION_CONFIG.messages.stepsExhausted);
        return;
    }
    
    if (!consumeSteps(INTERACTION_CONFIG.steps.rowColSwapCost)) return;
    
    // 执行带动画的交换
    performAnimatedRowSwap(row1, row2);
}

// 处理列交换
function handleColSwap(col1, col2) {
    if (remainingSteps === 0) {
        updateMessage(INTERACTION_CONFIG.messages.stepsExhausted);
        return;
    }
    
    if (!consumeSteps(INTERACTION_CONFIG.steps.rowColSwapCost)) return;
    
    // 执行带动画的交换
    performAnimatedColSwap(col1, col2);
}

// 执行带动画的行交换
function performAnimatedRowSwap(row1, row2) {
    if (row1 === row2) return;
    
    // 获取所有相关单元格
    const cells = [];
    for (let j = 0; j < 8; j++) {
        const sourceCell = document.querySelector(`[data-row="${row1}"][data-col="${j}"]`);
        const targetCell = document.querySelector(`[data-row="${row2}"][data-col="${j}"]`);
        if (sourceCell && targetCell) {
            cells.push({ source: sourceCell, target: targetCell });
        }
    }
    
    // 计算交换距离（用于动画）
    const container = document.getElementById('grid-container');
    const rect = container.getBoundingClientRect();
    const padding = INTERACTION_CONFIG.grid.padding;
    const gap = INTERACTION_CONFIG.grid.gap;
    const rows = INTERACTION_CONFIG.grid.rows;
    const availableHeight = rect.height - padding * 2 - gap * (rows - 1);
    const cellHeight = availableHeight / rows;
    const swapDistance = (row2 - row1) * (cellHeight + gap);
    
    // 添加交换动画类
    cells.forEach(({ source, target }) => {
        source.style.setProperty('--swap-distance', `${swapDistance}px`);
        target.style.setProperty('--swap-distance', `${-swapDistance}px`);
        source.classList.add('swapping-row');
        target.classList.add('swapping-row');
    });
    
    // 执行数据交换
    swapRows(row1, row2);
    
    // 等待动画完成后重新渲染
    setTimeout(() => {
        renderGrid();
        restoreSentenceSelectionHighlight();
    }, INTERACTION_CONFIG.timing.swapAnimationDuration);
}

// 执行带动画的列交换
function performAnimatedColSwap(col1, col2) {
    if (col1 === col2) return;
    
    // 获取所有相关单元格
    const cells = [];
    for (let i = 0; i < 8; i++) {
        const sourceCell = document.querySelector(`[data-row="${i}"][data-col="${col1}"]`);
        const targetCell = document.querySelector(`[data-row="${i}"][data-col="${col2}"]`);
        if (sourceCell && targetCell) {
            cells.push({ source: sourceCell, target: targetCell });
        }
    }
    
    // 计算交换距离（用于动画）
    const container = document.getElementById('grid-container');
    const rect = container.getBoundingClientRect();
    const padding = INTERACTION_CONFIG.grid.padding;
    const gap = INTERACTION_CONFIG.grid.gap;
    const cols = INTERACTION_CONFIG.grid.cols;
    const availableWidth = rect.width - padding * 2 - gap * (cols - 1);
    const cellWidth = availableWidth / cols;
    const swapDistance = (col2 - col1) * (cellWidth + gap);
    
    // 添加交换动画类
    cells.forEach(({ source, target }) => {
        source.style.setProperty('--swap-distance', `${swapDistance}px`);
        target.style.setProperty('--swap-distance', `${-swapDistance}px`);
        source.classList.add('swapping-col');
        target.classList.add('swapping-col');
    });
    
    // 执行数据交换
    swapCols(col1, col2);
    
    // 等待动画完成后重新渲染
    setTimeout(() => {
        renderGrid();
        restoreSentenceSelectionHighlight();
    }, INTERACTION_CONFIG.timing.swapAnimationDuration);
}

// 处理单元格点击
function handleCellClick(row, col) {
    if (isGameWon) return;
    if (isSwapMode) {
        handleSwapModeClick(row, col);
    } else {
        handleSentenceSelectionClick(row, col);
    }
}

// 交换模式：点击两个相邻格子交换（消耗1步），或双击行/列移动整行/列（消耗6步）
function handleSwapModeClick(row, col) {
    if (remainingSteps === 0) {
        updateMessage('步数已用尽，无法继续操作。');
        return;
    }

    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (!cell) return;

    // 检查是否是双击（用于整行/列移动）
    // 使用全局变量记录上次点击的时间和位置
    const now = Date.now();
    const lastClickInfo = window.lastClickInfo || { time: 0, row: -1, col: -1 };
    const timeDiff = now - lastClickInfo.time;
    const isSameCell = lastClickInfo.row === row && lastClickInfo.col === col;
    
    // 更新点击信息
    window.lastClickInfo = { time: now, row, col };

    // 如果是双击同一格子（在阈值时间内），尝试整行/列移动
    if (isSameCell && timeDiff < INTERACTION_CONFIG.timing.doubleClickThreshold && timeDiff > 0) {
        // 清除单个格子选择
        if (selectedCell) {
            const prev = document.querySelector(
                `[data-row="${selectedCell.row}"][data-col="${selectedCell.col}"]`
            );
            if (prev) prev.classList.remove('selected');
            selectedCell = null;
        }

        // 检查是否已选中同一行或列
        if (selectedRowOrCol) {
            if (selectedRowOrCol.type === 'row' && selectedRowOrCol.index === row) {
                // 再次双击同一行，取消选择
                selectedRowOrCol = null;
                updateMessage(INTERACTION_CONFIG.messages.rowDeselected);
                renderGrid();
                return;
            } else if (selectedRowOrCol.type === 'col' && selectedRowOrCol.index === col) {
                // 再次双击同一列，取消选择
                selectedRowOrCol = null;
                updateMessage(INTERACTION_CONFIG.messages.colDeselected);
                renderGrid();
                return;
            } else if (selectedRowOrCol.type === 'row') {
                // 已选中一行，现在双击另一行，交换两行
                if (!consumeSteps(INTERACTION_CONFIG.steps.rowColSwapCost)) return;
                swapRows(selectedRowOrCol.index, row);
                selectedRowOrCol = null;
                renderGrid();
                restoreSentenceSelectionHighlight();
                return;
            } else if (selectedRowOrCol.type === 'col') {
                // 已选中一列，现在双击另一列，交换两列
                if (!consumeSteps(INTERACTION_CONFIG.steps.rowColSwapCost)) return;
                swapCols(selectedRowOrCol.index, col);
                selectedRowOrCol = null;
                renderGrid();
                restoreSentenceSelectionHighlight();
                return;
            }
        } else {
            // 首次双击，选择行或列
            // 判断是选择行还是列：根据点击位置判断
            // 如果点击位置更靠近行中心（水平方向），选择列；更靠近列中心（垂直方向），选择行
            const gridCenter = (INTERACTION_CONFIG.grid.cols - 1) / 2;
            const rowCenter = Math.abs(col - gridCenter); // 距离行中心的距离（水平方向，即列索引）
            const colCenter = Math.abs(row - gridCenter); // 距离列中心的距离（垂直方向，即行索引）
            
            if (rowCenter < colCenter) {
                // 更靠近行中心，选择列
                selectedRowOrCol = { type: 'col', index: col };
                updateMessage(INTERACTION_CONFIG.messages.colSelected.replace('{index}', col + 1));
            } else {
                // 更靠近列中心，选择行
                selectedRowOrCol = { type: 'row', index: row };
                updateMessage(INTERACTION_CONFIG.messages.rowSelected.replace('{index}', row + 1));
            }
            renderGrid();
            return;
        }
    }

    // 单次点击：处理单个格子交换
    if (!selectedCell) {
        selectedCell = { row, col };
        selectedRowOrCol = null; // 清除行/列选择
        cell.classList.add('selected');
        renderGrid();
        return;
    }

    // 再次点击同一格子取消选择
    if (selectedCell.row === row && selectedCell.col === col) {
        cell.classList.remove('selected');
        selectedCell = null;
        renderGrid();
        return;
    }

    const isAdjacent =
        Math.abs(selectedCell.row - row) + Math.abs(selectedCell.col - col) === 1;

    if (!isAdjacent) {
        const prev = document.querySelector(
            `[data-row="${selectedCell.row}"][data-col="${selectedCell.col}"]`
        );
        if (prev) prev.classList.remove('selected');
        selectedCell = { row, col };
        selectedRowOrCol = null; // 清除行/列选择
        cell.classList.add('selected');
        updateMessage(INTERACTION_CONFIG.messages.swapAdjacentHint);
        renderGrid();
        return;
    }

    // 执行交换，消耗1步
    if (!consumeSteps(INTERACTION_CONFIG.steps.singleSwapCost)) return;

    const temp = grid[selectedCell.row][selectedCell.col];
    grid[selectedCell.row][selectedCell.col] = grid[row][col];
    grid[row][col] = temp;

    selectedCell = null;
    selectedRowOrCol = null;
    renderGrid();
    restoreSentenceSelectionHighlight();
}

// 交换两行
function swapRows(row1, row2) {
    if (row1 === row2) return;
    for (let j = 0; j < 8; j++) {
        const temp = grid[row1][j];
        grid[row1][j] = grid[row2][j];
        grid[row2][j] = temp;
    }
}

// 交换两列
function swapCols(col1, col2) {
    if (col1 === col2) return;
    for (let i = 0; i < 8; i++) {
        const temp = grid[i][col1];
        grid[i][col1] = grid[i][col2];
        grid[i][col2] = temp;
    }
}

// 句子选择模式下点击格子
// 支持横着、竖着、斜着（包括对角线）8个方向
function handleSentenceSelectionClick(row, col) {
    const cellKey = `${row},${col}`;
    const last = currentSentenceCells[currentSentenceCells.length - 1];

    // 如果已在当前路径末尾再次点击，则取消整个选择
    if (last && last.row === row && last.col === col && currentSentenceCells.length === 1) {
        clearCurrentSentenceSelection();
        return;
    }

    if (currentSentenceCells.length === 0) {
        currentSentenceCells.push({ row, col });
    } else {
        const isAlreadyIncluded = currentSentenceCells.some(c => c.row === row && c.col === col);
        // 支持8个方向：上下左右 + 4个对角线方向
        // 相邻条件：行差和列差的绝对值都不超过1，且至少有一个是1（不能都是0）
        const rowDiff = Math.abs(last.row - row);
        const colDiff = Math.abs(last.col - col);
        const isAdjacentToLast =
            rowDiff <= 1 && colDiff <= 1 && (rowDiff === 1 || colDiff === 1);

        if (!isAdjacentToLast) {
            // 不连续，重置从当前格重新开始
            clearCurrentSentenceSelection();
            currentSentenceCells.push({ row, col });
            updateMessage(INTERACTION_CONFIG.messages.sentenceRestart);
        } else if (!isAlreadyIncluded) {
            currentSentenceCells.push({ row, col });
        }
    }

    updateSentenceHighlight();
    updateCurrentSentenceDisplay();
}

// 更新句子高亮
function updateSentenceHighlight() {
    // 先清除所有旧的高亮
    document.querySelectorAll('.grid-cell.sentence-selected').forEach(cell => {
        cell.classList.remove('sentence-selected');
    });

    currentSentenceCells.forEach(({ row, col }) => {
        const cell = document.querySelector(
            `[data-row="${row}"][data-col="${col}"]`
        );
        if (cell) {
            cell.classList.add('sentence-selected');
        }
    });
}

// 在重新渲染后恢复句子高亮
function restoreSentenceSelectionHighlight() {
    updateSentenceHighlight();
}

// 清空当前选中的句子
function clearCurrentSentenceSelection() {
    currentSentenceCells = [];
    updateSentenceHighlight();
    updateCurrentSentenceDisplay();
}

// 模式切换：交换 / 填句
function toggleMode() {
    const checkbox = document.getElementById('mode-toggle-input');
    const switchLabel = document.getElementById('mode-toggle-btn');
    
    if (checkbox && switchLabel) {
        checkbox.checked = !checkbox.checked;
        isSwapMode = !checkbox.checked; // checkbox未选中时是交换模式
        
        // 更新样式类
        if (checkbox.checked) {
            switchLabel.classList.add('checked');
        } else {
            switchLabel.classList.remove('checked');
        }
    } else {
    isSwapMode = !isSwapMode;
    }
    
    // 切换到交换模式时清空句子选择，切回填句模式时清空交换选择
    if (isSwapMode) {
        clearCurrentSentenceSelection();
    } else {
        if (selectedCell) {
            const prev = document.querySelector(
                `[data-row="${selectedCell.row}"][data-col="${selectedCell.col}"]`
            );
            if (prev) prev.classList.remove('selected');
        }
        selectedCell = null;
        selectedRowOrCol = null; // 清除行/列选择
    }
    
    renderGrid();
}

// 更新当前句子展示（现在显示在upper-line中）
function updateCurrentSentenceDisplay() {
    // 直接更新upper-line，显示选中的文字在横线上方
    updateUpperLineWithSelection();
}

// 句子有效性判定
function isValidSentence(text) {
    // 根据当前关卡的字数要求进行验证
    const wordReq = LEVEL_CONFIG.getWordRequirement(currentLevelIndex);
    const requiredLowerCount = wordReq.lowerCount;
    
    // 检查字数是否符合当前关卡要求
    if (text.length !== requiredLowerCount) return false;
    
    // 下半句由玩家自由创作：
    // - 命中全局常见片段库：直接通过（奖励）
    // - 否则走非常基础的通顺度兜底
    if (validSentences.includes(text)) return true;
    return isBasicallyFluent(text);
}

// "通顺度"与基本语法/语义检查
// 参考种子库中的句子风格，调整判定逻辑使其更宽松合理
function isBasicallyFluent(text) {
    const chars = text.split('');

    // 1）极端情况过滤：不能全部是同一个字
    const uniqueChars = new Set(chars);
    if (uniqueChars.size === 1) return false;

    // 2）基于词典做简易分词与词性统计
    const tokens = tokenizeToWords(text);

    let nounLike = 0;      // 名词 / 名词性
    let pronounLike = 0;   // 代词
    let verbLike = 0;      // 动词
    let adjLike = 0;       // 形容词
    let particleCount = 0; // 虚词数量
    let knownWordCount = 0;
    let knownWordCharCoverage = 0;
    let unknownSingleCount = 0;

    tokens.forEach(tok => {
        const { word, pos } = tok;
        const len = word.length;
        if (pos && pos !== 'unknown') {
            knownWordCount++;
            knownWordCharCoverage += len;
            if (pos === 'noun') nounLike++;
            if (pos === 'pronoun') pronounLike++;
            if (pos === 'verb') verbLike++;
            if (pos === 'adj') adjLike++;
            if (pos === 'particle') particleCount++;
        } else if (len === 1) {
            unknownSingleCount++;
        }
    });

    const length = text.length;
    const coverageRatio = knownWordCharCoverage / length; // 被"认识"的字比例

    // 1. 词语搭配合理性：至少有一个 2+ 字的已知词，且覆盖率不能太低
    // 参考种子库：很多4字句，放宽要求
    const hasMultiCharWord = tokens.some(
        t => t.word.length >= 2 && t.pos && t.pos !== 'unknown'
    );
    if (!hasMultiCharWord) return false;
    
    // 对于4字句，覆盖率要求降低（种子库中很多是成语或固定搭配）
    const minCoverage = length <= 4 ? 0.4 : 0.5;
    if (coverageRatio < minCoverage) return false;

    // 2. 基础语法结构：参考种子库，放宽要求
    // 种子库中有很多结构：动宾、主谓、偏正、并列等
    // 不强制要求"名词/代词 + 动词"，只要有动词或形容词即可
    const hasVerbOrAdj = verbLike > 0 || adjLike > 0;
    const hasContentWord = nounLike > 0 || pronounLike > 0 || verbLike > 0 || adjLike > 0;
    
    // 如果完全没有实词，判不通过
    if (!hasContentWord) return false;
    
    // 对于4字句，允许只有名词+形容词的结构（如"夜色茫茫"）
    if (length <= 4 && (nounLike > 0 && adjLike > 0)) {
        return true;
    }
    
    // 其他情况，至少要有动词或形容词
    if (!hasVerbOrAdj) return false;

    // 排除"全虚词组合"（如"的的了就"）
    const nonParticleTokens = tokens.filter(
        t => t.pos !== 'particle' && t.pos !== 'unknown'
    );
    if (particleCount > 0 && nonParticleTokens.length === 0) return false;

    // 3. 语义连贯性（非常粗略）：
    // - 大部分字应处在已知词语里
    // - 孤立的未知单字不能太多
    // 对于4字句，放宽要求（参考种子库中的成语和固定搭配）
    const minCoverageRatio = length <= 4 ? 0.5 : 0.6;
    if (coverageRatio < minCoverageRatio) return false;
    
    const maxUnknownRatio = length <= 4 ? 0.6 : 0.5;
    if (unknownSingleCount > length * maxUnknownRatio) return false;

    return true;
}

// 将句子按 3/2/1 字优先级切分成词语 token，并附上简易“词性”
function tokenizeToWords(text) {
    const tokens = [];
    const n = text.length;
    let i = 0;
    while (i < n) {
        let matched = null;

        // 优先尝试 3 字词
        if (i + 3 <= n) {
            const w3 = text.slice(i, i + 3);
            if (wordLexicon[w3]) {
                matched = { word: w3, pos: wordLexicon[w3] };
                i += 3;
            }
        }

        // 再尝试 2 字词
        if (!matched && i + 2 <= n) {
            const w2 = text.slice(i, i + 2);
            if (wordLexicon[w2]) {
                matched = { word: w2, pos: wordLexicon[w2] };
                i += 2;
            }
        }

        // 最后回退到 1 字（可能是代词/虚词/未知）
        if (!matched) {
            const w1 = text[i];
            const pos = wordLexicon[w1] || 'unknown';
            matched = { word: w1, pos };
            i += 1;
        }

        tokens.push(matched);
    }
    return tokens;
}

// 点击"检测句子"
function handleCheckSentence() {
    const dialogConfig = INTERACTION_CONFIG.dialog.checkResult;
    
    // 根据当前关卡的字数要求进行验证
    const wordReq = LEVEL_CONFIG.getWordRequirement(currentLevelIndex);
    const requiredLowerCount = wordReq.lowerCount;
    
    if (currentSentenceCells.length < requiredLowerCount) {
        showResultDialog(dialogConfig.title, `句子长度不足，需要 ${requiredLowerCount} 个字`, 'error');
        return;
    }
    if (currentSentenceCells.length > requiredLowerCount) {
        showResultDialog(dialogConfig.title, `句子长度超出，需要 ${requiredLowerCount} 个字`, 'error');
        return;
    }

    const chars = currentSentenceCells.map(({ row, col }) => grid[row][col]);
    const text = chars.join('');

    if (!isValidSentence(text)) {
        showResultDialog(dialogConfig.title, dialogConfig.invalidSentence.replace('{text}', text), 'error');
        return;
    }

    const lastChar = chars[chars.length - 1];
    const rhymeGroup = getRhymeGroup(lastChar);

    if (!rhymeGroup) {
        showResultDialog(dialogConfig.title, dialogConfig.noRhymeGroup.replace('{text}', text), 'error');
        return;
    }

    // 本模式：只需找到"与上半句押韵"的下半句即可过关
    const level = getCurrentLevel();
    const expectedRhymeGroup = getExpectedRhymeGroupForLevel(level);

    if (!expectedRhymeGroup) {
        showResultDialog(dialogConfig.title, dialogConfig.levelRhymeError, 'error');
        return;
    }

    if (rhymeGroup !== expectedRhymeGroup) {
        showResultDialog(
            dialogConfig.title,
            dialogConfig.rhymeMismatch.replace('{char}', lastChar),
            'error'
        );
        return;
    }

    completedLowerLines.push({ text, rhymeGroup });
    
    // 检查是否解锁了新韵部（成功通过关卡后解锁）
    const isNewRhymeGroup = !unlockedRhymeGroups.has(rhymeGroup);
    if (isNewRhymeGroup) {
        // 解锁新韵部
        unlockedRhymeGroups.add(rhymeGroup);
        // 更新韵部解锁进度显示
        updateRhymeProgressDisplay();
        
        // 显示恭喜解锁新韵部的消息
        showResultDialog(
            '恭喜！',
            `解锁新韵部：${rhymeGroup}`,
            'success'
        );
        // 标记需要延迟进入下一关，等玩家确认对话框后再继续
        window.pendingNextLevelAfterUnlock = true;
        return;
    }
    
    // 在最后一个汉字右下角添加正确标记
    const lastCell = currentSentenceCells[currentSentenceCells.length - 1];
    if (lastCell) {
        correctMarkCell = { row: lastCell.row, col: lastCell.col };
        // 重新渲染网格以显示标记
        renderGrid();
        restoreSentenceSelectionHighlight();
    }
    
    showResultDialog(dialogConfig.title, dialogConfig.success.replace('{text}', text), 'success');
    // 标记需要进入下一关，在用户确认对话框后执行
    window.pendingNextLevel = true;
}

function goNextLevel() {
    isGameWon = true;
    currentLevelIndex = currentLevelIndex + 1;
    // 稍微延迟，让玩家看到成功提示
    setTimeout(() => {
        isGameWon = false;
        initLevel();
    }, INTERACTION_CONFIG.timing.nextLevelDelay);
}

// 从上半句里提取“韵脚字”：取最后一个中文字符（排除标点与下划线）
function getExpectedRhymeGroupForLevel(level) {
    if (level && level.rhymeGroup) return level.rhymeGroup;
    const text = level.upperLine || '';
    // 取最后一个汉字
    for (let i = text.length - 1; i >= 0; i--) {
        const ch = text[i];
        if (/[\u4e00-\u9fff]/.test(ch)) {
            return getRhymeGroup(ch);
        }
    }
    return null;
}

// 更新消息
function updateMessage(text, type = '') {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
    messageEl.className = 'message' + (type ? ' ' + type : '');
}

// 显示检测结果对话框
function showResultDialog(title, message, type = 'info') {
    const dialog = document.getElementById('result-dialog');
    const titleEl = document.getElementById('result-dialog-title');
    const messageEl = document.getElementById('result-dialog-message');
    
    if (!dialog || !titleEl || !messageEl) return;
    
    titleEl.textContent = title;
    messageEl.textContent = message;
    messageEl.className = 'result-message ' + type;
    
    dialog.classList.add('active');
}

// 隐藏检测结果对话框
function hideResultDialog() {
    const dialog = document.getElementById('result-dialog');
    if (dialog) {
        dialog.classList.remove('active');
    }
}

// 重置游戏
function resetGame() {
    currentLevelIndex = 0;
    completedLowerLines = [];
    unlockedRhymeGroups = new Set(); // 重置已解锁的韵部
    selectedCell = null;
    selectedRowOrCol = null;
    remainingSteps = MAX_STEPS; // 重置步数
    isSwapMode = true; // 重置为默认的交换模式
    isGameWon = false; // 重置游戏获胜状态
    updateRhymeProgressDisplay(); // 更新韵部进度显示
    const checkbox = document.getElementById('mode-toggle-input');
    const switchLabel = document.getElementById('mode-toggle-btn');
    if (checkbox && switchLabel) {
        checkbox.checked = false; // 未选中表示交换模式
        switchLabel.classList.remove('checked');
    }
    // 重新开始播放背景音乐（如果已暂停）
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic && bgMusic.paused) {
        bgMusic.play().catch(err => {
            console.log('背景音乐播放失败');
        });
    }
    initLevel();
}

// 视口缩放：将 720×1280 的画面在不裁剪的前提下等比缩放以适配窗口，并保持顶部对齐
function updateGameScale() {
    const root = document.getElementById('game-root');
    if (!root) return;
    const designWidth = 720;
    const designHeight = 1280;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const scale = Math.min(vw / designWidth, vh / designHeight);

    // 缩放后，确保游戏区域在顶部
    root.style.transform = `scale(${scale})`;
    root.style.marginTop = '0'; // 确保没有上边距
}

// 初始化视差背景层
function initParallaxLayers() {
    if (!PARALLAX_CONFIG.enabled) return;
    
    const parallaxContainer = document.querySelector('.parallax-container');
    if (!parallaxContainer) return;
    
    // 清空现有层
    parallaxContainer.innerHTML = '';
    
    // 创建视差层
    PARALLAX_CONFIG.layers.forEach((layerConfig, index) => {
        const layer = document.createElement('div');
        layer.className = 'parallax-layer';
        layer.style.backgroundImage = `url('${layerConfig.image}')`;
        layer.style.zIndex = layerConfig.zIndex || -1;
        layer.dataset.speed = layerConfig.speed;
        layer.dataset.layerIndex = index;
        parallaxContainer.appendChild(layer);
    });
}

// 初始化视差效果
function initParallaxEffect() {
    if (!PARALLAX_CONFIG.enabled) return;
    
    // 检测是否为移动设备
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        // 移动设备上禁用视差效果
        return;
    }
    
    const gameRoot = document.getElementById('game-root');
    const layers = document.querySelectorAll('.parallax-layer');
    if (layers.length === 0 || !gameRoot) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isAnimating = true;
    
    // 鼠标移动事件
    const handleMouseMove = (e) => {
        // 获取game-root的位置和尺寸
        const rootRect = gameRoot.getBoundingClientRect();
        
        // 计算鼠标相对于game-root中心的位置（-1 到 1）
        const centerX = rootRect.left + rootRect.width / 2;
        const centerY = rootRect.top + rootRect.height / 2;
        
        // 检查鼠标是否在game-root范围内
        if (e.clientX >= rootRect.left && e.clientX <= rootRect.right &&
            e.clientY >= rootRect.top && e.clientY <= rootRect.bottom) {
            targetX = (e.clientX - centerX) / (rootRect.width / 2);
            targetY = (e.clientY - centerY) / (rootRect.height / 2);
        } else {
            // 鼠标在game-root外，逐渐回到中心
            targetX = 0;
            targetY = 0;
        }
    };
    
    // 平滑更新视差位置
    const updateParallax = () => {
        if (!isAnimating) return;
        
        // 使用缓动函数平滑移动
        const easing = 0.08;
        mouseX += (targetX - mouseX) * easing;
        mouseY += (targetY - mouseY) * easing;
        
        // 检查是否还需要继续动画（如果已经接近目标位置，可以停止）
        const diffX = Math.abs(targetX - mouseX);
        const diffY = Math.abs(targetY - mouseY);
        
        if (diffX < 0.001 && diffY < 0.001 && targetX === 0 && targetY === 0) {
            // 已经回到中心位置
            mouseX = 0;
            mouseY = 0;
            layers.forEach(layer => {
                layer.style.transform = `translate(0px, 0px)`;
            });
        } else {
            layers.forEach(layer => {
                const speed = parseFloat(layer.dataset.speed) || 0.3;
                const moveX = mouseX * PARALLAX_CONFIG.intensity * speed;
                const moveY = mouseY * PARALLAX_CONFIG.intensity * speed;
                
                layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        }
        
        requestAnimationFrame(updateParallax);
    };
    
    // 绑定鼠标移动事件
    window.addEventListener('mousemove', handleMouseMove);
    
    // 鼠标离开game-root时重置
    gameRoot.addEventListener('mouseleave', () => {
        targetX = 0;
        targetY = 0;
    });
    
    // 窗口失去焦点时重置
    window.addEventListener('blur', () => {
        targetX = 0;
        targetY = 0;
    });
    
    // 开始动画循环
    updateParallax();
}

// ==================== 应用布局配置 ====================
// 将LAYOUT_CONFIG中的配置应用到对应的CSS元素
function applyLayoutConfig() {
    // 应用body样式
    if (LAYOUT_CONFIG.body) {
        const body = document.body;
        Object.keys(LAYOUT_CONFIG.body).forEach(key => {
            const value = LAYOUT_CONFIG.body[key];
            if (typeof value === 'number') {
                body.style[key] = `${value}px`;
            } else {
                body.style[key] = value;
            }
        });
    }
    
    // 应用视差容器样式
    const parallaxContainer = document.querySelector('.parallax-container');
    if (parallaxContainer && LAYOUT_CONFIG.parallaxContainer) {
        Object.keys(LAYOUT_CONFIG.parallaxContainer).forEach(key => {
            const value = LAYOUT_CONFIG.parallaxContainer[key];
            if (typeof value === 'number') {
                parallaxContainer.style[key] = `${value}px`;
            } else {
                parallaxContainer.style[key] = value;
            }
        });
    }
    
    // 应用game-root样式
    const gameRoot = document.getElementById('game-root');
    if (gameRoot && LAYOUT_CONFIG.gameRoot) {
        Object.keys(LAYOUT_CONFIG.gameRoot).forEach(key => {
            const value = LAYOUT_CONFIG.gameRoot[key];
            if (typeof value === 'number') {
                gameRoot.style[key] = `${value}px`;
            } else {
                gameRoot.style[key] = value;
            }
        });
    }
    
    // 应用container样式
    const container = document.querySelector('.container');
    if (container && LAYOUT_CONFIG.container) {
        Object.keys(LAYOUT_CONFIG.container).forEach(key => {
            const value = LAYOUT_CONFIG.container[key];
            if (typeof value === 'number') {
                container.style[key] = `${value}px`;
            } else {
                container.style[key] = value;
            }
        });
    }
    
    // 应用其他元素样式（通过CSS类选择器）
    const styleMap = {
        '.level-panel': LAYOUT_CONFIG.levelPanel,
        '.level-meta': LAYOUT_CONFIG.levelMeta,
        '.level-indicator': LAYOUT_CONFIG.levelIndicator,
        '.rhyme-progress-indicator': LAYOUT_CONFIG.rhymeProgressIndicator,
        '.music-toggle-btn': LAYOUT_CONFIG.musicToggleBtn,
        '.steps-indicator': LAYOUT_CONFIG.stepsIndicator,
        '.steps-container': LAYOUT_CONFIG.stepsContainer,
        '.mode-toggle-switch': LAYOUT_CONFIG.modeToggleSwitch,
        '.upper-line': LAYOUT_CONFIG.upperLine,
        '.selected-text-above-line': LAYOUT_CONFIG.selectedTextAboveLine,
        '.grid-wrapper': LAYOUT_CONFIG.gridWrapper,
        '.grid-with-col-handles': LAYOUT_CONFIG.gridWithColHandles,
        '.grid-container': LAYOUT_CONFIG.gridContainer,
        '.row-handles': LAYOUT_CONFIG.rowHandles,
        '.col-handles': LAYOUT_CONFIG.colHandles,
        '.row-swap-btn': LAYOUT_CONFIG.rowSwapBtn,
        '.col-swap-btn': LAYOUT_CONFIG.colSwapBtn,
        '.status': LAYOUT_CONFIG.status,
        '.message': LAYOUT_CONFIG.message,
        '.sentence-panel': LAYOUT_CONFIG.sentencePanel,
        '.sentence-label': LAYOUT_CONFIG.sentenceLabel,
        '.sentence-content': LAYOUT_CONFIG.sentenceContent,
        '.secondary-btn': LAYOUT_CONFIG.secondaryBtn,
        '.grid-controls': LAYOUT_CONFIG.gridControls,
        '.reset-btn': LAYOUT_CONFIG.resetBtn
    };
    
    // 创建或更新style标签来应用这些样式
    let styleEl = document.getElementById('dynamic-layout-styles');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'dynamic-layout-styles';
        document.head.appendChild(styleEl);
    }
    
    let cssText = '';
    Object.keys(styleMap).forEach(selector => {
        const config = styleMap[selector];
        if (config) {
            cssText += `${selector} {\n`;
            let transformX = null;
            let transformY = null;
            let scale = null;
            Object.keys(config).forEach(key => {
                const value = config[key];
                // 特殊处理 transformX、transformY 和 scale
                if (key === 'transformX') {
                    transformX = value;
                } else if (key === 'transformY') {
                    transformY = value;
                } else if (key === 'scale') {
                    scale = value;
                } else {
                    // 将camelCase转换为kebab-case
                    const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
                    if (typeof value === 'number') {
                        cssText += `    ${cssKey}: ${value}px;\n`;
                    } else {
                        cssText += `    ${cssKey}: ${value};\n`;
                    }
                }
            });
            // 如果有 transformX、transformY 或 scale，添加 transform 属性
            if (transformX !== null || transformY !== null || scale !== null) {
                const transforms = [];
                // 对于 selected-text-above-line，需要先居中（translateX(-50%)），然后再添加偏移
                if (selector === '.selected-text-above-line') {
                    transforms.push('translateX(-50%)'); // 先居中
                    if (transformX !== null || transformY !== null) {
                        const x = transformX !== null ? transformX : 0;
                        const y = transformY !== null ? transformY : 0;
                        transforms.push(`translate(${x}px, ${y}px)`); // 然后添加偏移
                    }
                } else {
                    if (transformX !== null || transformY !== null) {
                        const x = transformX !== null ? transformX : 0;
                        const y = transformY !== null ? transformY : 0;
                        transforms.push(`translate(${x}px, ${y}px)`);
                    }
                }
                if (scale !== null) {
                    transforms.push(`scale(${scale})`);
                }
                cssText += `    transform: ${transforms.join(' ')} !important;\n`;
                // 为 secondary-btn 添加 hover 状态的 transform，合并而不是覆盖
                if (selector === '.secondary-btn') {
                    cssText += `}\n\n${selector}:hover {\n`;
                    cssText += `    transform: ${transforms.join(' ')} translateY(-0.25rem) !important;\n`;
                }
                // 为 music-toggle-btn 添加 hover 和 active 状态的 transform，合并而不是覆盖
                if (selector === '.music-toggle-btn') {
                    if (transformX !== null || transformY !== null) {
                        const x = transformX !== null ? transformX : 0;
                        const y = transformY !== null ? transformY : 0;
                        cssText += `}\n\n${selector}:hover {\n`;
                        cssText += `    transform: translate(${x}px, ${y}px) scale(1.1) !important;\n`;
                        cssText += `}\n\n${selector}:active {\n`;
                        cssText += `    transform: translate(${x}px, ${y}px) scale(0.95) !important;\n`;
                    }
                }
            }
            cssText += '}\n\n';
        }
    });
    
    styleEl.textContent = cssText;
}

// 初始化
// 应用标题样式
function applyTitleStyle() {
    const titleEl = document.querySelector('h1');
    if (titleEl && GAME_TEXT_CONFIG.titleStyle) {
        const style = GAME_TEXT_CONFIG.titleStyle;
        if (style.marginTop) titleEl.style.marginTop = `${style.marginTop}px`;
        if (style.marginBottom) titleEl.style.marginBottom = `${style.marginBottom}px`;
        if (style.fontSize) titleEl.style.fontSize = style.fontSize;
        if (style.fontWeight) titleEl.style.fontWeight = style.fontWeight;
        if (style.color) titleEl.style.color = style.color;
        if (style.textAlign) titleEl.style.textAlign = style.textAlign;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 应用布局配置
    applyLayoutConfig();
    
    // 初始化背景音乐（不自动播放，等待用户点击"Get started"按钮）
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) {
        bgMusic.volume = 0.2; // 设置小音量（20%）
        bgMusic.loop = true; // 循环播放
    }
    
    // 处理音乐控制按钮
    const musicToggleBtn = document.getElementById('music-toggle-btn');
    if (musicToggleBtn && bgMusic) {
        // 更新按钮状态
        const updateMusicButton = () => {
            if (bgMusic.paused) {
                musicToggleBtn.classList.add('paused');
                musicToggleBtn.title = '播放音乐';
            } else {
                musicToggleBtn.classList.remove('paused');
                musicToggleBtn.title = '暂停音乐';
            }
        };
        
        // 监听音乐播放/暂停状态变化
        bgMusic.addEventListener('play', updateMusicButton);
        bgMusic.addEventListener('pause', updateMusicButton);
        
        // 初始状态
        updateMusicButton();
        
        // 点击切换播放/暂停
        musicToggleBtn.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play().catch(err => {
                    console.log('背景音乐播放失败:', err);
                });
            } else {
                bgMusic.pause();
            }
        });
    }
    
    // 处理"Get started"按钮点击事件
    const getStartedBtn = document.getElementById('get-started-btn');
    const startDialog = document.getElementById('start-dialog');
    if (getStartedBtn && startDialog) {
        getStartedBtn.addEventListener('click', () => {
            // 开始播放背景音乐
            if (bgMusic) {
                bgMusic.play().catch(err => {
                    console.log('背景音乐播放失败:', err);
                });
            }
            // 隐藏开始弹窗
            startDialog.classList.remove('active');
        });
    }
    
    // 初始化视差背景
    // 初始化视差背景
    initParallaxLayers();
    initParallaxEffect();
    
    // 初始化模式切换按钮（默认是交换模式）
    const modeBtn = document.getElementById('mode-toggle-btn');
    const modeCheckbox = document.getElementById('mode-toggle-input');
    if (modeBtn && modeCheckbox) {
        modeCheckbox.checked = false; // 未选中表示交换模式
        modeBtn.classList.remove('checked');
        modeBtn.addEventListener('click', toggleMode);
        // 也监听checkbox的变化
        modeCheckbox.addEventListener('change', () => {
            isSwapMode = !modeCheckbox.checked;
            // 更新样式类
            if (modeCheckbox.checked) {
                modeBtn.classList.add('checked');
            } else {
                modeBtn.classList.remove('checked');
            }
            
            if (isSwapMode) {
                clearCurrentSentenceSelection();
            } else {
                if (selectedCell) {
                    const prev = document.querySelector(
                        `[data-row="${selectedCell.row}"][data-col="${selectedCell.col}"]`
                    );
                    if (prev) prev.classList.remove('selected');
                }
                selectedCell = null;
                selectedRowOrCol = null;
            }
            renderGrid();
        });
    }
    
    document.getElementById('reset-btn').addEventListener('click', resetGame);
    const checkBtn = document.getElementById('check-sentence-btn');
    if (checkBtn) {
        checkBtn.addEventListener('click', handleCheckSentence);
    }
    
    // 对话框关闭事件
    const dialogCloseBtn = document.getElementById('result-dialog-close');
    const dialogConfirmBtn = document.getElementById('result-dialog-confirm');
    const dialogOverlay = document.querySelector('.result-dialog-overlay');
    
    const closeDialogHandler = () => {
        hideResultDialog();
        // 如果标记了解锁新韵部后需要进入下一关，则执行
        if (window.pendingNextLevelAfterUnlock) {
            window.pendingNextLevelAfterUnlock = false;
            window.pendingNextLevel = true;
            // 继续进入下一关的流程
            goNextLevel();
            return;
        }
        // 如果标记了需要进入下一关，则执行
        if (window.pendingNextLevel) {
            window.pendingNextLevel = false;
            goNextLevel();
            return;
        }
        // 如果标记了游戏通关，则重置游戏
        if (window.pendingGameWin) {
            window.pendingGameWin = false;
            resetGame();
            return;
        }
        // 如果标记了游戏结束，则重置游戏
        if (window.pendingGameOver) {
            window.pendingGameOver = false;
            resetGame();
        }
    };
    
    if (dialogCloseBtn) {
        dialogCloseBtn.addEventListener('click', closeDialogHandler);
    }
    if (dialogConfirmBtn) {
        dialogConfirmBtn.addEventListener('click', closeDialogHandler);
    }
    if (dialogOverlay) {
        dialogOverlay.addEventListener('click', closeDialogHandler);
    }
    
    // 初始化韵部进度显示
    updateRhymeProgressDisplay();
    initLevel();
    updateGameScale();
    window.addEventListener('resize', updateGameScale);
});

