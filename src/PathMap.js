const UrlWhiteList = [
  // 小德
  {
    widgetName: '新质检单管理',
    traceName: '质检管理/新质检单管理',
    traceUrl: '/inspector/qualityAppeal/qualityNewSheet'
  },
  {
    widgetName: '质检申诉管理',
    traceName: '质检管理/质检申诉管理',
    traceUrl: '/inspector/qualityAppeal/qualityAppeal'
  },
  {
    widgetName: 'APP统计',
    traceName: '运营分析/APP统计',
    traceUrl: '/inspector/ko'
  },
  {
    widgetName: 'KO日报',
    traceName: '运营分析/KO日报',
    traceUrl: '/inspector/allReport/koDaily'
  },
  {
    widgetName: '群组管理',
    traceName: '运营分析/群组管理',
    traceUrl: '/inspector/koUserOperation/userOperation'
  },
  {
    widgetName: '学员查询',
    traceName: '运营分析/学员查询',
    traceUrl: '/inspector/koUserData'
  },
  {
    widgetName: '学分待申诉',
    traceName: '学分管理/学分待申诉',
    traceUrl: '/inspector/scoreAppeal/awaitAppeal'
  },
  {
    widgetName: '在途学分申诉',
    traceName: '学分管理/在途学分申诉',
    traceUrl: '/inspector/scoreAppeal/onAppeal'
  },
  {
    widgetName: '结案学分申诉',
    traceName: '学分管理/结案学分申诉',
    traceUrl: '/inspector/scoreAppeal/finishAppeal'
  },
  {
    widgetName: '质检标注',
    traceName: '运营分析/质检标注',
    traceUrl: '/inspector/qualityMarking'
  },
  {
    widgetName: '报考督学',
    traceName: '运营分析/报考督学',
    traceUrl: '/inspector/entrancePlatform/statistics'
  },
  {
    widgetName: '质检报表',
    traceName: '运营分析/质检报表',
    traceUrl: '/inspector/allReport/qualityReport'
  },
  {
    widgetName: '运营数据',
    traceName: '免费学/运营数据',
    traceUrl: '/inspector/allReport/freeStudy'
  },
  {
    widgetName: '创收',
    traceName: '低人效运营/创收',
    traceUrl: '/inspector/allReport/incomeAll'
  },
  {
    widgetName: '退费总览',
    traceName: '低人效运营/退费总览',
    traceUrl: '/inspector/allReport/refundOverview'
  },
  {
    widgetName: '退费阶段',
    traceName: '低人效运营/退费阶段',
    traceUrl: '/inspector/allReport/refundPhase'
  },
  {
    widgetName: '底表-自变量',
    traceName: '低人效运营/退费-自变量',
    traceUrl: '/inspector/allReport/refundDetailZibianliang'
  },
  {
    widgetName: '底表-芒格',
    traceName: '低人效运营/退费-芒格',
    traceUrl: '/inspector/allReport/refundDetailMangge'
  },
  {
    widgetName: '底表-狐逻泰罗',
    traceName: '低人效运营/退费-狐逻泰罗',
    traceUrl: '/inspector/allReport/refundDetailHuluo'
  },
  {
    widgetName: '报考信息',
    traceName: '报考信息系统/只读查询',
    traceUrl: '/inspector/allReport/examReadOnly'
  },
  //  小德移动端
  {
    widgetName: '学分统计',
    traceName: '学分统计',
    traceUrl: '/score/indexPage'
  },
  {
    widgetName: '学分列表',
    traceName: '学分统计/学分列表',
    traceUrl: '/score/details'
  },
  {
    widgetName: '学分详情',
    traceName: '学分统计/学分列表/学分详情',
    traceUrl: '/score/demention'
  },
  //  绩效移动端
  {
    widgetName: '绩效统计',
    traceName: '绩效统计',
    traceUrl: '/achievement/indexPage/teacher'
  },
  {
    widgetName: '绩效总览',
    traceName: '绩效总览',
    traceUrl: '/achievement/indexPage/boss/pandect'
  },
  {
    widgetName: '每月绩效',
    traceName: '每月绩效',
    traceUrl: '/achievement/indexPage/boss/monthly'
  },
  {
    widgetName: '绩效分档',
    traceName: '绩效统计/每月绩效/绩效分档',
    traceUrl: '/achievement/level'
  },
  {
    widgetName: '绩效详情',
    traceName: '绩效统计/每月绩效/绩效分档/绩效详情',
    traceUrl: '/achievement/details'
  },
  {
    widgetName: '创收列表-学院',
    traceName: '',
    traceUrl: '/achievement/performance/admin'
  },
  {
    widgetName: '创收列表-家族',
    traceName: '',
    traceUrl: '/achievement/performance/president'
  },
  {
    widgetName: '创收列表-小组',
    traceName: '',
    traceUrl: '/achievement/performance/group'
  },
  {
    widgetName: '创收详情-家族长',
    traceName: '',
    traceUrl: '/achievement/performance/family'
  },
  {
    widgetName: '创收详情-运营长',
    traceName: '',
    traceUrl: '/achievement/performance/operation'
  },
  {
    widgetName: '创收详情-班主任',
    traceName: '',
    traceUrl: '/achievement/performance/teacher'
  },
  {
    widgetName: '好推绩效',
    traceName: '',
    traceUrl: '/achievement/performance/renewal'
  },
  {
    widgetName: '续报绩效',
    traceName: '',
    traceUrl: '/achievement/performance/goodpush'
  },
  {
    widgetName: '成考专本套绩效',
    traceName: '',
    traceUrl: '/achievement/performance/adulttest'
  },
  {
    widgetName: '小德工作台',
    traceName: '',
    traceUrl: '/inspector/indexPage'
  },
  {
    widgetName: '学分明细',
    traceName: '数据服务/学分明细',
    traceUrl: '/inspector/xdCredit/index'
  },
  {
    widgetName: '管理层工作台',
    traceName: '管理层工作台',
    traceUrl: '/inspector/indexPage/ManagementBench'
  },
  {
    widgetName: '报考大盘',
    traceName: '报考大盘',
    traceUrl: '/inspector/examPlant/index'
  },
  {
    widgetName: '客诉质检手册',
    traceName: '质检管理/客诉质检手册',
    traceUrl: '/inspector/classQuality/qualityType/1'
  },
  {
    widgetName: '班主任质检手册',
    traceName: '质检管理/班主任质检手册',
    traceUrl: '/inspector/classQuality/qualityType/2'
  },
  {
    widgetName: '魔方计划列表',
    traceName: '魔方计划/魔方计划列表',
    traceUrl: '/inspector/cubePlan/list'
  },
  //  vue pc
  {
    widgetName: "报考时间",
    traceName: "报考信息系统/报考时间",
    traceUrl: `${window.examweb}/#/examinationTime`
  },
  {
    widgetName: "报考流程",
    traceName: "报考信息系统/报考流程",
    traceUrl: `${window.examweb}/#/examinationProcess`
  },
  {
    widgetName: "报考网址",
    traceName: "报考信息系统/报考网址",
    traceUrl: `${window.examweb}/#/examinationAddress`
  },
  {
    widgetName: "联系自考办",
    traceName: "报考信息系统/联系自考办",
    traceUrl: `${window.examweb}/#/lianxi`
  },
    //我的积分
    {
        widgetName: '积分首页',
        traceName: '积分首页',
        traceUrl: '/myPoints'
    },{
        widgetName: '积分明细',
        traceName: '积分首页/积分明细',
        traceUrl: '/pointsDetail'
    },
//    我的学习报告
    {
        widgetName: '分享成功页',
        traceName: '分享成功页',
        traceUrl: '/sharePage'
    },
    {
        widgetName: '身份不符合条件页',
        traceName: '身份不符合条件页',
        traceUrl: '/emptyPage/missMatch'
    },
    {
        widgetName: '产品包不符合条件页',
        traceName: '产品包不符合条件页',
        traceUrl: '/emptyPage/missMatchPackage'
    },
    {
        widgetName: '暂无学习数据页',
        traceName: '暂无学习数据页',
        traceUrl: '/emptyPage/noStudyData'
    },{
        widgetName: '暂无学习数据页',
        traceName: '暂无学习数据页',
        traceUrl: '/emptyPage/noLearnData'
    }


];
