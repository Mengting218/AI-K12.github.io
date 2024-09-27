// script.js

// 语言包
const languagePack = {
    zh: {
        welcome: "AI在美国K-12教育中的应用",
        enterUsername: "请输入用户名：",
        next: "下一步",
        selectLanguage: "请选择语言 / Please select a language:",
        selectRole: "请选择角色：",
        teacher: "老师",
        student: "学生",
        progress: "进度：",
        difficulty: "难度：",
        submit: "提交答案",
        correct: "回答正确！",
        incorrect: "回答错误。正确答案是：",
        explanation: "解析：",
        reportTitle: "游戏报告",
        username: "用户名：",
        role: "角色：",
        totalTime: "总用时：",
        correctAnswers: "正确答案数：",
        thanks: "感谢你的参与！",
        restart: "重新开始",
        difficulties: ["简单", "中等", "困难", "额外"],
        viewScores: "查看排行榜",
        scoresTitle: "排行榜",
        back: "返回",
        noScores: "暂无记录",
        pleaseSelectOption: "请选择一个选项！",
        pleaseEnterUsername: "请输入用户名！"
    },
    en: {
        welcome: "AI in U.S. K-12 Education",
        enterUsername: "Please enter your username:",
        next: "Next",
        selectLanguage: "请选择语言 / Please select a language:",
        selectRole: "Please select a role:",
        teacher: "Teacher",
        student: "Student",
        progress: "Progress:",
        difficulty: "Difficulty:",
        submit: "Submit",
        correct: "Correct!",
        incorrect: "Incorrect. The correct answer is:",
        explanation: "Explanation:",
        reportTitle: "Game Report",
        username: "Username:",
        role: "Role:",
        totalTime: "Total Time:",
        correctAnswers: "Number of Correct Answers:",
        thanks: "Thank you for playing!",
        restart: "Restart",
        difficulties: ["Easy", "Medium", "Hard", "Extra"],
        viewScores: "View Scores",
        scoresTitle: "Leaderboard",
        back: "Back",
        noScores: "No records yet",
        pleaseSelectOption: "Please select an option!",
        pleaseEnterUsername: "Please enter your username!"
    }
};

let lang = 'zh'; // 默认语言为中文

const questions = {
    teacher: {
        easy: [],
        medium: [],
        hard: [],
        extra: []
    },
    student: {
        easy: [],
        medium: [],
        hard: [],
        extra: []
    }
};

// 初始化所有题目
function initializeQuestions() {
    // 老师角色的简单题目
    questions.teacher.easy.push(
        {
            question: {
                zh: "AI可以如何帮助老师减少重复性工作？",
                en: "How can AI help teachers reduce repetitive tasks?"
            },
            options: {
                zh: ["A. 自动批改作业", "B. 增加工作量", "C. 减少学生人数", "D. 延长上课时间"],
                en: ["A. Automatically grade assignments", "B. Increase workload", "C. Reduce student numbers", "D. Extend class time"]
            },
            answer: "A",
            explanation: {
                zh: "AI可以通过自动批改选择题等方式，帮助老师节省时间。",
                en: "AI can help teachers save time by automatically grading multiple-choice questions."
            }
        },
        {
            question: {
                zh: "AI技术在课堂管理中可以扮演什么角色？",
                en: "What role can AI play in classroom management?"
            },
            options: {
                zh: ["A. 智能监控", "B. 增加噪音", "C. 关闭网络", "D. 减少教学资源"],
                en: ["A. Intelligent monitoring", "B. Increase noise", "C. Disable internet", "D. Reduce teaching resources"]
            },
            answer: "A",
            explanation: {
                zh: "AI可以帮助监控课堂情况，及时发现并反馈问题。",
                en: "AI can help monitor the classroom and provide timely feedback on issues."
            }
        },
        {
            question: {
                zh: "老师如何利用AI来个性化教学？",
                en: "How can teachers use AI for personalized teaching?"
            },
            options: {
                zh: ["A. 定制教学方案", "B. 增加课堂人数", "C. 减少教学内容", "D. 延长假期"],
                en: ["A. Customize teaching plans", "B. Increase class size", "C. Reduce teaching content", "D. Extend holidays"]
            },
            answer: "A",
            explanation: {
                zh: "通过AI分析学生数据，老师可以定制适合每个学生的教学计划。",
                en: "By analyzing student data, AI helps teachers customize teaching plans for each student."
            }
        },
        {
            question: {
                zh: "AI可以如何协助老师备课？",
                en: "How can AI assist teachers in lesson preparation?"
            },
            options: {
                zh: ["A. 提供教学资源", "B. 关闭互联网", "C. 增加考试次数", "D. 减少教学时间"],
                en: ["A. Provide teaching resources", "B. Disable internet", "C. Increase exams", "D. Reduce teaching time"]
            },
            answer: "A",
            explanation: {
                zh: "AI可以快速搜集和整理相关的教学资料，供老师参考。",
                en: "AI can quickly gather and organize teaching materials for teachers to reference."
            }
        }
    );

    // 老师角色的中等题目
    questions.teacher.medium.push(
        {
            question: {
                zh: "在应用AI技术时，老师需要关注哪些伦理问题？",
                en: "What ethical issues should teachers be aware of when applying AI technology?"
            },
            options: {
                zh: ["A. 隐私保护", "B. 增加工作量", "C. 延长上课时间", "D. 减少学生人数"],
                en: ["A. Privacy protection", "B. Increase workload", "C. Extend class time", "D. Reduce student numbers"]
            },
            answer: "A",
            explanation: {
                zh: "老师需要确保学生的数据和隐私得到保护。",
                en: "Teachers need to ensure that student data and privacy are protected."
            }
        },
        {
            question: {
                zh: "AI如何改变传统的评估方式？",
                en: "How does AI change traditional assessment methods?"
            },
            options: {
                zh: ["A. 实时反馈", "B. 延迟成绩", "C. 减少考试", "D. 增加压力"],
                en: ["A. Real-time feedback", "B. Delay grades", "C. Reduce exams", "D. Increase pressure"]
            },
            answer: "A",
            explanation: {
                zh: "AI可以提供即时的学习反馈，帮助老师调整教学策略。",
                en: "AI can provide instant learning feedback, helping teachers adjust teaching strategies."
            }
        },
        {
            question: {
                zh: "老师如何利用AI促进学生的批判性思维？",
                en: "How can teachers use AI to promote students' critical thinking?"
            },
            options: {
                zh: ["A. 引导探索", "B. 提供答案", "C. 减少讨论", "D. 增加作业"],
                en: ["A. Guide exploration", "B. Provide answers", "C. Reduce discussions", "D. Increase homework"]
            },
            answer: "A",
            explanation: {
                zh: "AI可以提供多样化的学习路径，激发学生的思考和探索。",
                en: "AI can offer diverse learning paths, stimulating students' thinking and exploration."
            }
        },
        {
            question: {
                zh: "AI在远程教学中有哪些应用？",
                en: "What are the applications of AI in remote teaching?"
            },
            options: {
                zh: ["A. 虚拟课堂", "B. 减少互动", "C. 增加延迟", "D. 提高费用"],
                en: ["A. Virtual classrooms", "B. Reduce interaction", "C. Increase latency", "D. Increase costs"]
            },
            answer: "A",
            explanation: {
                zh: "AI支持的虚拟课堂可以模拟面对面的教学环境。",
                en: "AI-supported virtual classrooms can simulate face-to-face teaching environments."
            }
        }
    );

    // 老师角色的困难题目
    questions.teacher.hard.push(
        {
            question: {
                zh: "AI在教育中的应用可能带来哪些公平性问题？",
                en: "What fairness issues might arise from AI applications in education?"
            },
            options: {
                zh: ["A. 数字鸿沟", "B. 增加平等", "C. 减少成本", "D. 提高效率"],
                en: ["A. Digital divide", "B. Increase equality", "C. Reduce costs", "D. Improve efficiency"]
            },
            answer: "A",
            explanation: {
                zh: "资源不平等可能导致部分学生无法受益于AI技术。",
                en: "Unequal resources may prevent some students from benefiting from AI technology."
            }
        },
        {
            question: {
                zh: "如何确保AI算法在教育评估中不产生偏见？",
                en: "How to ensure AI algorithms do not introduce bias in educational assessments?"
            },
            options: {
                zh: ["A. 算法透明", "B. 增加数据量", "C. 减少测试", "D. 延长学习时间"],
                en: ["A. Algorithm transparency", "B. Increase data volume", "C. Reduce testing", "D. Extend learning time"]
            },
            answer: "A",
            explanation: {
                zh: "需要审查和调整算法，确保其公平性和透明度。",
                en: "Algorithms need to be reviewed and adjusted to ensure fairness and transparency."
            }
        },
        {
            question: {
                zh: "AI在教育政策制定中应扮演什么角色？",
                en: "What role should AI play in educational policy-making?"
            },
            options: {
                zh: ["A. 辅助决策", "B. 代替人类", "C. 增加复杂性", "D. 减少信息"],
                en: ["A. Assist decision-making", "B. Replace humans", "C. Increase complexity", "D. Reduce information"]
            },
            answer: "A",
            explanation: {
                zh: "AI可以分析大量数据，帮助制定更科学的教育政策。",
                en: "AI can analyze large amounts of data to help formulate more scientific educational policies."
            }
        },
        {
            question: {
                zh: "老师如何平衡AI技术与传统教学方法的关系？",
                en: "How can teachers balance AI technology with traditional teaching methods?"
            },
            options: {
                zh: ["A. 融合创新", "B. 完全依赖AI", "C. 放弃传统", "D. 忽视技术"],
                en: ["A. Integrate innovation", "B. Fully rely on AI", "C. Abandon tradition", "D. Ignore technology"]
            },
            answer: "A",
            explanation: {
                zh: "将AI技术融入教学，既保持传统优势又创新教学模式。",
                en: "Integrate AI technology into teaching to maintain traditional advantages while innovating teaching models."
            }
        }
    );

    // 老师角色的额外题目
    questions.teacher.extra.push(
        {
            question: {
                zh: "未来AI可能完全取代老师的角色吗？为什么？",
                en: "Will AI completely replace the role of teachers in the future? Why?"
            },
            options: {
                zh: ["A. 不会，因为情感交流", "B. 会，因为技术进步", "C. 不确定", "D. 与地区有关"],
                en: ["A. No, because of emotional exchange", "B. Yes, due to technological advancement", "C. Uncertain", "D. Depends on the region"]
            },
            answer: "A",
            explanation: {
                zh: "老师的人类情感和经验是AI无法替代的。",
                en: "Human emotions and experiences of teachers cannot be replaced by AI."
            }
        },
        {
            question: {
                zh: "老师如何应对AI带来的职业挑战？",
                en: "How should teachers respond to the professional challenges brought by AI?"
            },
            options: {
                zh: ["A. 提升技能", "B. 忽视变化", "C. 减少教学", "D. 增加休假"],
                en: ["A. Enhance skills", "B. Ignore changes", "C. Reduce teaching", "D. Increase vacations"]
            },
            answer: "A",
            explanation: {
                zh: "通过持续学习，提升自身的专业能力和技术素养。",
                en: "Continuously learn to enhance professional abilities and technical literacy."
            }
        },
        {
            question: {
                zh: "在AI辅助下，教育评估方式将如何演变？",
                en: "How will educational assessment methods evolve with AI assistance?"
            },
            options: {
                zh: ["A. 个性化评估", "B. 统一标准", "C. 减少反馈", "D. 增加考试"],
                en: ["A. Personalized assessment", "B. Unified standards", "C. Reduce feedback", "D. Increase exams"]
            },
            answer: "A",
            explanation: {
                zh: "评估将更关注个人成长和能力发展，而非标准化测试。",
                en: "Assessments will focus more on personal growth and ability development rather than standardized tests."
            }
        },
        {
            question: {
                zh: "AI技术的快速发展对教育立法提出了哪些新要求？",
                en: "What new requirements does rapid AI development pose for educational legislation?"
            },
            options: {
                zh: ["A. 更新法规", "B. 减少监管", "C. 增加限制", "D. 忽视技术"],
                en: ["A. Update regulations", "B. Reduce oversight", "C. Increase restrictions", "D. Ignore technology"]
            },
            answer: "A",
            explanation: {
                zh: "需要制定新的法律法规来规范AI在教育中的应用。",
                en: "New laws and regulations are needed to regulate AI applications in education."
            }
        }
    );

    // 学生角色的简单题目
    questions.student.easy.push(
        {
            question: {
                zh: "AI可以为学生提供哪些学习帮助？",
                en: "What kind of learning assistance can AI provide to students?"
            },
            options: {
                zh: ["A. 智能辅导", "B. 增加作业量", "C. 减少学习资源", "D. 延长放假时间"],
                en: ["A. Intelligent tutoring", "B. Increase homework", "C. Reduce learning resources", "D. Extend vacation time"]
            },
            answer: "A",
            explanation: {
                zh: "AI可以提供个性化的辅导，帮助学生理解课程内容。",
                en: "AI can offer personalized tutoring to help students understand course content."
            }
        },
        {
            question: {
                zh: "学生如何利用AI进行自我评估？",
                en: "How can students use AI for self-assessment?"
            },
            options: {
                zh: ["A. 在线测试", "B. 增加作业", "C. 减少练习", "D. 延迟学习"],
                en: ["A. Online tests", "B. Increase homework", "C. Reduce practice", "D. Delay learning"]
            },
            answer: "A",
            explanation: {
                zh: "通过AI支持的在线测试，学生可以即时了解自己的学习情况。",
                en: "With AI-supported online tests, students can immediately understand their learning status."
            }
        },
        {
            question: {
                zh: "AI如何帮助学生规划学习时间？",
                en: "How does AI help students plan their study time?"
            },
            options: {
                zh: ["A. 智能日程安排", "B. 增加课业", "C. 减少休息", "D. 提高难度"],
                en: ["A. Intelligent scheduling", "B. Increase coursework", "C. Reduce rest", "D. Increase difficulty"]
            },
            answer: "A",
            explanation: {
                zh: "AI可以根据任务和时间自动生成学习计划。",
                en: "AI can automatically generate study plans based on tasks and time."
            }
        },
        {
            question: {
                zh: "AI可以如何增强学生的学习兴趣？",
                en: "How can AI enhance students' interest in learning?"
            },
            options: {
                zh: ["A. 互动式学习", "B. 增加考试", "C. 减少活动", "D. 延长上课时间"],
                en: ["A. Interactive learning", "B. Increase exams", "C. Reduce activities", "D. Extend class time"]
            },
            answer: "A",
            explanation: {
                zh: "AI提供的互动式学习内容可以激发学生的兴趣。",
                en: "Interactive learning content provided by AI can stimulate students' interest."
            }
        }
    );

    // 学生角色的中等题目
    questions.student.medium.push(
        {
            question: {
                zh: "使用AI学习工具时，学生需要注意哪些隐私问题？",
                en: "What privacy issues should students be aware of when using AI learning tools?"
            },
            options: {
                zh: ["A. 数据安全", "B. 增加分享", "C. 减少学习", "D. 延长使用时间"],
                en: ["A. Data security", "B. Increase sharing", "C. Reduce learning", "D. Extend usage time"]
            },
            answer: "A",
            explanation: {
                zh: "要确保个人学习数据不会被滥用或泄露。",
                en: "Ensure that personal learning data is not misused or leaked."
            }
        },
        {
            question: {
                zh: "AI如何支持学生的协作学习？",
                en: "How does AI support collaborative learning among students?"
            },
            options: {
                zh: ["A. 在线协作平台", "B. 增加个人作业", "C. 减少交流机会", "D. 提高学习压力"],
                en: ["A. Online collaboration platforms", "B. Increase individual assignments", "C. Reduce communication opportunities", "D. Increase learning pressure"]
            },
            answer: "A",
            explanation: {
                zh: "AI驱动的平台可以促进学生之间的互动和协作。",
                en: "AI-driven platforms can enhance interaction and collaboration among students."
            }
        },
        {
            question: {
                zh: "学生应如何看待AI在学习中的作用？",
                en: "How should students view the role of AI in learning?"
            },
            options: {
                zh: ["A. 辅助工具", "B. 依赖全部", "C. 忽视存在", "D. 增加负担"],
                en: ["A. A tool", "B. Fully depend", "C. Ignore existence", "D. Increase burden"]
            },
            answer: "A",
            explanation: {
                zh: "将AI视为辅助学习的工具，而非完全依赖。",
                en: "View AI as a tool to assist learning, not to be fully dependent on."
            }
        },
        {
            question: {
                zh: "AI在帮助特殊教育学生方面有哪些应用？",
                en: "What are the applications of AI in assisting special education students?"
            },
            options: {
                zh: ["A. 定制化支持", "B. 增加难度", "C. 减少帮助", "D. 提高标准"],
                en: ["A. Customized support", "B. Increase difficulty", "C. Reduce help", "D. Raise standards"]
            },
            answer: "A",
            explanation: {
                zh: "AI可以提供针对性的支持，满足特殊教育需求。",
                en: "AI can provide targeted support to meet special education needs."
            }
        }
    );

    // 学生角色的困难题目
    questions.student.hard.push(
        {
            question: {
                zh: "AI可能对学生的自主学习能力产生什么影响？",
                en: "What impact might AI have on students' self-learning abilities?"
            },
            options: {
                zh: ["A. 依赖性", "B. 增强自主性", "C. 无影响", "D. 提高社交能力"],
                en: ["A. Dependency", "B. Enhance autonomy", "C. No impact", "D. Improve social skills"]
            },
            answer: "A",
            explanation: {
                zh: "过度依赖AI可能削弱学生的自主学习能力。",
                en: "Overreliance on AI may weaken students' self-learning abilities."
            }
        },
        {
            question: {
                zh: "学生应如何应对AI带来的学习伦理挑战？",
                en: "How should students respond to ethical challenges in learning brought by AI?"
            },
            options: {
                zh: ["A. 诚信学习", "B. 利用AI作弊", "C. 忽视规则", "D. 减少学习"],
                en: ["A. Learn with integrity", "B. Cheat using AI", "C. Ignore rules", "D. Reduce learning"]
            },
            answer: "A",
            explanation: {
                zh: "坚持学术诚信，不利用AI进行作弊等不当行为。",
                en: "Maintain academic integrity and avoid unethical behaviors like cheating with AI."
            }
        },
        {
            question: {
                zh: "AI技术的发展将如何影响未来的就业市场，学生应如何准备？",
                en: "How will AI development affect the future job market, and how should students prepare?"
            },
            options: {
                zh: ["A. 提升技能", "B. 放弃学习", "C. 增加娱乐", "D. 忽视变化"],
                en: ["A. Enhance skills", "B. Abandon learning", "C. Increase entertainment", "D. Ignore changes"]
            },
            answer: "A",
            explanation: {
                zh: "学生需要培养创造力和批判性思维等AI无法替代的能力。",
                en: "Students need to develop creativity and critical thinking skills that AI cannot replace."
            }
        },
        {
            question: {
                zh: "学生如何参与到AI教育政策的讨论中？",
                en: "How can students participate in discussions on AI educational policies?"
            },
            options: {
                zh: ["A. 积极反馈", "B. 无视政策", "C. 减少参与", "D. 增加抱怨"],
                en: ["A. Provide feedback", "B. Ignore policies", "C. Reduce participation", "D. Increase complaints"]
            },
            answer: "A",
            explanation: {
                zh: "通过学生组织或公开平台表达意见和建议。",
                en: "Express opinions and suggestions through student organizations or public platforms."
            }
        }
    );

    // 学生角色的额外题目
    questions.student.extra.push(
        {
            question: {
                zh: "AI在教育中的应用会不会导致师生关系的变化？",
                en: "Will the application of AI in education change teacher-student relationships?"
            },
            options: {
                zh: ["A. 可能会", "B. 不会", "C. 已经改变", "D. 无法预测"],
                en: ["A. Possibly", "B. No", "C. Already changed", "D. Unpredictable"]
            },
            answer: "A",
            explanation: {
                zh: "AI介入可能改变传统的师生互动方式，需要适应新模式。",
                en: "AI may alter traditional teacher-student interactions, requiring adaptation to new models."
            }
        },
        {
            question: {
                zh: "未来教育中，学生应该具备哪些AI相关的素养？",
                en: "What AI-related literacy should students possess in future education?"
            },
            options: {
                zh: ["A. AI素养", "B. 忽视技术", "C. 减少学习", "D. 增加休息"],
                en: ["A. AI literacy", "B. Ignore technology", "C. Reduce learning", "D. Increase rest"]
            },
            answer: "A",
            explanation: {
                zh: "了解AI的基本原理和应用，具备批判性思维。",
                en: "Understand basic AI principles and applications, and possess critical thinking."
            }
        },
        {
            question: {
                zh: "学生如何保护自己在使用AI工具时的数字权益？",
                en: "How can students protect their digital rights when using AI tools?"
            },
            options: {
                zh: ["A. 了解权限", "B. 分享密码", "C. 忽视协议", "D. 减少使用"],
                en: ["A. Know permissions", "B. Share passwords", "C. Ignore agreements", "D. Reduce usage"]
            },
            answer: "A",
            explanation: {
                zh: "仔细阅读用户协议，了解并管理自己的数据权限。",
                en: "Carefully read user agreements to understand and manage data permissions."
            }
        },
        {
            question: {
                zh: "AI可能带来哪些学习负担或压力，学生如何应对？",
                en: "What learning burdens or pressures might AI bring, and how should students cope?"
            },
            options: {
                zh: ["A. 焦虑感", "B. 增加娱乐", "C. 减少学习", "D. 忽视问题"],
                en: ["A. Anxiety", "B. Increase entertainment", "C. Reduce learning", "D. Ignore issues"]
            },
            answer: "A",
            explanation: {
                zh: "合理安排学习，注重身心健康，寻求必要的支持。",
                en: "Arrange study reasonably, focus on physical and mental health, and seek necessary support."
            }
        }
    );
}

initializeQuestions();

let username = '';
let role = '';
let currentQuestionIndex = 0;
let selectedQuestions = [];
let startTime;
let correctAnswers = 0;

window.onload = function() {
    // 显示语言选择界面
    document.getElementById('language-section').style.display = 'block';
};

document.getElementById('language-section').addEventListener('click', function(e) {
    if (e.target.classList.contains('lang-btn')) {
        lang = e.target.getAttribute('data-lang');
        localStorage.setItem('language', lang);
        applyLanguage();
        document.getElementById('language-section').style.display = 'none';
        document.getElementById('username-section').style.display = 'block';

        // 检查是否有保存的用户名
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            username = savedUsername;
            document.getElementById('username').value = username;
        }
    }
});

document.getElementById('username-btn').addEventListener('click', function() {
    username = document.getElementById('username').value;
    if (username.trim() !== '') {
        localStorage.setItem('username', username);
        document.getElementById('username-section').style.display = 'none';
        document.getElementById('role-section').style.display = 'block';
    } else {
        alert(languagePack[lang].pleaseEnterUsername);
    }
});

// 应用语言设置
function applyLanguage() {
    // 更新标题，仅显示所选语言
    document.querySelector('title').innerText = languagePack[lang].welcome;
    document.getElementById('main-title').innerText = languagePack[lang].welcome;

    // 动态设置 body 的类名
    document.body.className = lang;

    // 更新其他文本内容
    document.getElementById('enterUsername').innerText = languagePack[lang].enterUsername;
    document.getElementById('username-btn').innerText = languagePack[lang].next;
    document.getElementById('choose-role').innerText = languagePack[lang].selectRole;
    const roleBtns = document.getElementsByClassName('role-btn');
    roleBtns[0].innerText = languagePack[lang].teacher;
    roleBtns[1].innerText = languagePack[lang].student;
    document.getElementById('submit-btn').innerText = languagePack[lang].submit;
    document.getElementById('restart-btn').innerText = languagePack[lang].restart;
    document.getElementById('show-scores-btn').innerText = languagePack[lang].viewScores;
    document.getElementById('scores-title').innerText = languagePack[lang].scoresTitle;
    document.getElementById('back-btn').innerText = languagePack[lang].back;
}

const roleButtons = document.getElementsByClassName('role-btn');
for (let btn of roleButtons) {
    btn.addEventListener('click', function() {
        role = this.getAttribute('data-role');
        selectQuestions();
        document.getElementById('role-section').style.display = 'none';
        document.getElementById('question-section').style.display = 'block';
        document.getElementById('show-scores-btn').style.display = 'block';
        startTime = new Date();
        showQuestion();
    });
}

function selectQuestions() {
    const difficulties = ['easy', 'medium', 'hard', 'extra'];
    for (let diff of difficulties) {
        selectedQuestions = selectedQuestions.concat(questions[role][diff]);
    }
}

function showQuestion() {
    if (currentQuestionIndex < selectedQuestions.length) {
        const q = selectedQuestions[currentQuestionIndex];
        document.getElementById('progress').innerText = `${languagePack[lang].progress} ${currentQuestionIndex + 1}/${selectedQuestions.length}`;
        document.getElementById('difficulty').innerText = `${languagePack[lang].difficulty} ${getDifficulty(currentQuestionIndex)}`;
        document.getElementById('question-text').innerText = q.question[lang];
        document.getElementById('options').innerHTML = '';
        q.options[lang].forEach(option => {
            const btn = document.createElement('button');
            btn.classList.add('option-btn');
            btn.innerText = option;
            btn.addEventListener('click', function() {
                document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
            });
            document.getElementById('options').appendChild(btn);
        });
        document.getElementById('feedback').innerText = '';
    } else {
        endGame();
    }
}

document.getElementById('submit-btn').addEventListener('click', function() {
    const selectedOption = document.querySelector('.option-btn.selected');
    if (selectedOption) {
        const userAnswer = selectedOption.innerText.charAt(0);
        const correctAnswer = selectedQuestions[currentQuestionIndex].answer;
        if (userAnswer === correctAnswer) {
            correctAnswers++;
            document.getElementById('feedback').innerText = languagePack[lang].correct;
        } else {
            document.getElementById('feedback').innerText = `${languagePack[lang].incorrect} ${correctAnswer}`;
        }
        document.getElementById('feedback').innerText += `\n${languagePack[lang].explanation} ${selectedQuestions[currentQuestionIndex].explanation[lang]}`;
        currentQuestionIndex++;
        setTimeout(showQuestion, 3000);
    } else {
        alert(languagePack[lang].pleaseSelectOption);
    }
});

function getDifficulty(index) {
    const diffIndex = Math.floor(index / 4);
    return languagePack[lang].difficulties[diffIndex];
}

function endGame() {
    const endTime = new Date();
    const totalTime = Math.floor((endTime - startTime) / 1000);
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('report-section').style.display = 'block';
    document.querySelector('#report-section h2').innerText = languagePack[lang].reportTitle;
    const report = `
${languagePack[lang].username} ${username}\n
${languagePack[lang].role} ${languagePack[lang][role]}\n
${languagePack[lang].totalTime} ${totalTime} ${lang === 'zh' ? '秒' : 'seconds'}\n
${languagePack[lang].correctAnswers} ${correctAnswers}/${selectedQuestions.length}\n
${languagePack[lang].thanks}
`;
    document.getElementById('report').innerText = report;

    // 保存成绩
    const playerData = {
        username: username,
        role: role,
        totalTime: totalTime,
        correctAnswers: correctAnswers,
        date: new Date().toLocaleString(),
        lang: lang
    };

    // 获取已有的成绩列表
    let scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push(playerData);
    localStorage.setItem('scores', JSON.stringify(scores));
}

document.getElementById('restart-btn').addEventListener('click', function() {
    location.reload();
});

// 查看排行榜
document.getElementById('show-scores-btn').addEventListener('click', function() {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    const scoresList = document.getElementById('scores-list');
    scoresList.innerHTML = '';
    if (scores.length === 0) {
        const li = document.createElement('li');
        li.innerText = languagePack[lang].noScores;
        scoresList.appendChild(li);
    } else {
        scores.forEach(score => {
            const li = document.createElement('li');
            li.innerText = `${score.username} - ${languagePack[score.lang][score.role]} - ${score.correctAnswers}/${selectedQuestions.length} - ${score.totalTime}${score.lang === 'zh' ? '秒' : 's'} - ${score.date}`;
            scoresList.appendChild(li);
        });
    }
    document.getElementById('game').style.display = 'none';
    document.getElementById('scores-section').style.display = 'block';
});

document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('scores-section').style.display = 'none';
    document.getElementById('game').style.display = 'block';
});