// 临时数据
const tableData = [
    {
        accountInfomartion: '账号:754831111111@qq.com', // 账户信息
        accountType: '支付宝', // 提现账户类型
        periodValidity: '长期', // 有效期
        assistantName: '文心一言', // AI助手名称
        sumConsumeToken: '100', // 总消耗量（k/tokens）
        giveToken: '80', // 赠送调用量（k/tokens）
        giveBalanceToken: 0, // 赠送剩余（k/tokens） 
        callModel: 'ERNIE-4.0-8K-Preview', // 调用模型
        realityNumL: 0.5, // 系统实际付费（元）
        profitStatus: '盈利', // 盈利情况
        profitNum: '0.607', // 盈利额（元）
        consumptionAmount: 0.612, // 消费金额（元）
        consumeToken: 5.1, // 消耗（（k/tokens）
        inputToken: 2, // 输入（k/tokens）
        outputToken: 3.1, // 输出（k/tokens）
        affiliation: '企业', // 所属类型
        accumulateType: '预存费用', // 充值类型
        payWay: '灵感值', // 支付方式
        payStatus: '已支付', // 支付状态
        payResult: '成功', // 支付结果
        num: 1,
        companyName: '长春工业大学计算机学院', // 公司名
        allNum:'300', // 用户总数
        name: "孙茜", //姓名
        account: '19956568989', // 账号
        date: '2024-06-18', // 日期
        status: '正常', // 当前状态
        giveNum: '200', // 赠送金额
        accumulate: '300', // 累计充值/充值金额
        spend: '400', // 费用花费
        balance: '100', // 费用余额
        invoice: '100', // 已开票金额
        voucherType: '业务赠送', // 代金券类型
        voucherNum: '20', // 代金券金额
        voucherStatus: '未生效', // 代金券状态
    },{
        accountInfomartion: '账号:754831111111@qq.com', // 账户信息
        accountType: '支付宝', // 提现账户类型
        periodValidity: '长期', // 有效期
        assistantName: '文心一言', // AI助手名称
        sumConsumeToken: '100', // 总消耗量（k/tokens）
        giveToken: '80', // 赠送调用量（k/tokens）
        giveBalanceToken: 0, // 赠送剩余（k/tokens） 
        callModel: 'ERNIE-4.0-8K-Preview', // 调用模型
        realityNumL: 0.5, // 系统实际付费（元）
        profitStatus: '盈利', // 盈利情况
        profitNum: '0.607', // 盈利额（元）
        consumptionAmount: 0.612, // 消费金额（元）
        consumeToken: 5.1, // 消耗（（k/tokens）
        inputToken: 2, // 输入（k/tokens）
        outputToken: 3.1, // 输出（k/tokens）
        affiliation: '企业',
        accumulateType: '预存费用', // 充值类型
        payWay: '灵感值', // 支付方式
        payStatus: '已支付', // 支付状态
        payResult: '成功',
        num: 2,
        companyName: '吉林省政府办公厅',
        allNum:'300',
        name: "赵薇",
        account: '1804632565',
        date: '2024-06-18',
        status: '正常',
        giveNum: '200',
        accumulate: '300',
        spend: '400',
        balance: '100',
        invoice: '100',
        voucherType: '业务赠送', // 代金券类型
        voucherNum: '20', // 代金券金额
        voucherStatus: '未生效', // 代金券状态
    },{
        accountInfomartion: '账号:754831111111@qq.com', // 账户信息
        accountType: '支付宝', // 提现账户类型
        periodValidity: '长期', // 有效期
        assistantName: '文心一言', // AI助手名称
        sumConsumeToken: '100', // 总消耗量（k/tokens）
        giveToken: '80', // 赠送调用量（k/tokens）
        giveBalanceToken: 0, // 赠送剩余（k/tokens） 
        callModel: 'ERNIE-4.0-8K-Preview', // 调用模型
        realityNumL: 0.5, // 系统实际付费（元）
        profitStatus: '盈利', // 盈利情况
        profitNum: '0.607', // 盈利额（元）
        consumptionAmount: 0.612, // 消费金额（元）
        consumeToken: 5.1, // 消耗（（k/tokens）
        inputToken: 2, // 输入（k/tokens）
        outputToken: 3.1, // 输出（k/tokens）
        affiliation: '企业',
        accumulateType: '预存费用', // 充值类型
        payWay: '灵感值', // 支付方式
        payStatus: '已支付', // 支付状态
        payResult: '成功',
        num: 3,
        companyName: '吉林省生态环境厅',
        allNum:'300',
        name: "李安",
        account: '18078896585',
        date: '2024-06-18',
        status: '正常',
        giveNum: '200',
        accumulate: '300',
        spend: '400',
        balance: '100',
        invoice: '100',
        voucherType: '业务赠送', // 代金券类型
        voucherNum: '20', // 代金券金额
        voucherStatus: '未生效', // 代金券状态
    },{
        accountInfomartion: '账号:754831111111@qq.com', // 账户信息
        accountType: '支付宝', // 提现账户类型
        periodValidity: '长期', // 有效期
        assistantName: '文心一言', // AI助手名称
        sumConsumeToken: '100', // 总消耗量（k/tokens）
        giveToken: '80', // 赠送调用量（k/tokens）
        giveBalanceToken: 0, // 赠送剩余（k/tokens） 
        callModel: 'ERNIE-4.0-8K-Preview', // 调用模型
        realityNumL: 0.5, // 系统实际付费（元）
        profitStatus: '盈利', // 盈利情况
        profitNum: '0.607', // 盈利额（元）
        consumptionAmount: 0.612, // 消费金额（元）
        consumeToken: 5.1, // 消耗（（k/tokens）
        inputToken: 2, // 输入（k/tokens）
        outputToken: 3.1, // 输出（k/tokens）
        affiliation: '企业',
        accumulateType: '预存费用', // 充值类型
        payWay: '灵感值', // 支付方式
        payStatus: '已支付', // 支付状态
        payResult: '成功',
        num: 4,
        companyName: '吉林大学软件学院',
        allNum:'300',
        name: "钱武新",
        account: '18989784511',
        date: '2024-06-18',
        status: '正常',
        giveNum: '200',
        accumulate: '300',
        spend: '400',
        balance: '100',
        invoice: '100',
        voucherType: '业务赠送', // 代金券类型
        voucherNum: '20', // 代金券金额
        voucherStatus: '未生效', // 代金券状态
    },{
        accountInfomartion: '账号:754831111111@qq.com', // 账户信息
        accountType: '支付宝', // 提现账户类型
        periodValidity: '长期', // 有效期
        assistantName: '文心一言', // AI助手名称
        sumConsumeToken: '100', // 总消耗量（k/tokens）
        giveToken: '80', // 赠送调用量（k/tokens）
        giveBalanceToken: 0, // 赠送剩余（k/tokens） 
        callModel: 'ERNIE-4.0-8K-Preview', // 调用模型
        realityNumL: 0.5, // 系统实际付费（元）
        profitStatus: '盈利', // 盈利情况
        profitNum: '0.607', // 盈利额（元）
        consumptionAmount: 0.612, // 消费金额（元）
        consumeToken: 5.1, // 消耗（（k/tokens）
        inputToken: 2, // 输入（k/tokens）
        outputToken: 3.1, // 输出（k/tokens）
        affiliation: '企业',
        accumulateType: '预存费用', // 充值类型
        payWay: '灵感值', // 支付方式
        payStatus: '已支付', // 支付状态
        payResult: '成功',
        num: 5,
        companyName: '吉林大学管理学院',
        allNum:'300',
        name: "周伟",
        account: '15056567854',
        date: '2024-06-18',
        status: '正常',
        giveNum: '200',
        accumulate: '300',
        spend: '400',
        balance: '100',
        invoice: '100',
        voucherType: '业务赠送', // 代金券类型
        voucherNum: '20', // 代金券金额
        voucherStatus: '未生效', // 代金券状态
    },{
        accountInfomartion: '账号:754831111111@qq.com', // 账户信息
        accountType: '支付宝', // 提现账户类型
        periodValidity: '长期', // 有效期
        assistantName: '文心一言', // AI助手名称
        sumConsumeToken: '100', // 总消耗量（k/tokens）
        giveToken: '80', // 赠送调用量（k/tokens）
        giveBalanceToken: 0, // 赠送剩余（k/tokens） 
        callModel: 'ERNIE-4.0-8K-Preview', // 调用模型
        realityNumL: 0.5, // 系统实际付费（元）
        profitStatus: '盈利', // 盈利情况
        profitNum: '0.607', // 盈利额（元）
        consumptionAmount: 0.612, // 消费金额（元）
        consumeToken: 5.1, // 消耗（（k/tokens）
        inputToken: 2, // 输入（k/tokens）
        outputToken: 3.1, // 输出（k/tokens）
        affiliation: '企业',
        accumulateType: '预存费用', // 充值类型
        payWay: '灵感值', // 支付方式
        payStatus: '已支付', // 支付状态
        payResult: '成功',
        num: 6,
        companyName: '长春市文旅局',
        allNum:'300',
        name: "吴晓峰",
        account: '13874563211',
        date: '2024-06-18',
        status: '正常',
        giveNum: '200',
        accumulate: '300',
        spend: '400',
        balance: '100',
        invoice: '100',
        voucherType: '业务赠送', // 代金券类型
        voucherNum: '20', // 代金券金额
        voucherStatus: '未生效', // 代金券状态
    },{
        accountInfomartion: '账号:754831111111@qq.com', // 账户信息
        accountType: '支付宝', // 提现账户类型
        periodValidity: '长期', // 有效期
        assistantName: '文心一言', // AI助手名称
        sumConsumeToken: '100', // 总消耗量（k/tokens）
        giveToken: '80', // 赠送调用量（k/tokens）
        giveBalanceToken: 0, // 赠送剩余（k/tokens） 
        callModel: 'ERNIE-4.0-8K-Preview', // 调用模型
        realityNumL: 0.5, // 系统实际付费（元）
        profitStatus: '盈利', // 盈利情况
        profitNum: '0.607', // 盈利额（元）
        consumptionAmount: 0.612, // 消费金额（元）
        consumeToken: 5.1, // 消耗（（k/tokens）
        inputToken: 2, // 输入（k/tokens）
        outputToken: 3.1, // 输出（k/tokens）
        affiliation: '企业',
        accumulateType: '预存费用', // 充值类型
        payWay: '灵感值', // 支付方式
        payStatus: '已支付', // 支付状态
        payResult: '成功',
        num: 7,
        companyName: '吉林市文旅局',
        allNum:'300',
        name: "郑舒月",
        account: '17895448552',
        date: '2024-06-18',
        status: '正常',
        giveNum: '200',
        accumulate: '300',
        spend: '400',
        balance: '100',
        invoice: '100',
        voucherType: '业务赠送', // 代金券类型
        voucherNum: '20', // 代金券金额
        voucherStatus: '未生效', // 代金券状态
    },{
        accountInfomartion: '账号:754831111111@qq.com', // 账户信息
        accountType: '支付宝', // 提现账户类型
        periodValidity: '长期', // 有效期
        assistantName: '文心一言', // AI助手名称
        sumConsumeToken: '100', // 总消耗量（k/tokens）
        giveToken: '80', // 赠送调用量（k/tokens）
        giveBalanceToken: 0, // 赠送剩余（k/tokens） 
        callModel: 'ERNIE-4.0-8K-Preview', // 调用模型
        realityNumL: 0.5, // 系统实际付费（元）
        profitStatus: '盈利', // 盈利情况
        profitNum: '0.607', // 盈利额（元）
        consumptionAmount: 0.612, // 消费金额（元）
        consumeToken: 5.1, // 消耗（（k/tokens）
        inputToken: 2, // 输入（k/tokens）
        outputToken: 3.1, // 输出（k/tokens）
        affiliation: '企业',
        accumulateType: '预存费用', // 充值类型
        payWay: '灵感值', // 支付方式
        payStatus: '已支付', // 支付状态
        payResult: '成功',
        num: 8,
        companyName: '辽源市文旅局',
        allNum:'300',
        name: "王艺璇",
        account: '18789852132',
        date: '2024-06-18',
        status: '正常',
        giveNum: '200',
        accumulate: '300',
        spend: '400',
        balance: '100',
        invoice: '100',
        voucherType: '业务赠送', // 代金券类型
        voucherNum: '20', // 代金券金额
        voucherStatus: '未生效', // 代金券状态
    },{
        accountInfomartion: '账号:754831111111@qq.com', // 账户信息
        accountType: '支付宝', // 提现账户类型
        periodValidity: '长期', // 有效期
        assistantName: '文心一言', // AI助手名称
        sumConsumeToken: '100', // 总消耗量（k/tokens）
        giveToken: '80', // 赠送调用量（k/tokens）
        giveBalanceToken: 0, // 赠送剩余（k/tokens） 
        callModel: 'ERNIE-4.0-8K-Preview', // 调用模型
        realityNumL: 0.5, // 系统实际付费（元）
        profitStatus: '盈利', // 盈利情况
        profitNum: '0.607', // 盈利额（元）
        consumptionAmount: 0.612, // 消费金额（元）
        consumeToken: 5.1, // 消耗（（k/tokens）
        inputToken: 2, // 输入（k/tokens）
        outputToken: 3.1, // 输出（k/tokens）
        affiliation: '企业',
        accumulateType: '预存费用', // 充值类型
        payWay: '灵感值', // 支付方式
        payStatus: '已支付', // 支付状态
        payResult: '成功',
        num: 9,
        companyName: '通化市文旅局',
        allNum:'300',
        name: "冯宇",
        account: '15847987985',
        date: '2024-06-18',
        status: '正常',
        giveNum: '200',
        accumulate: '300',
        spend: '400',
        balance: '100',
        invoice: '100',
        voucherType: '业务赠送', // 代金券类型
        voucherNum: '20', // 代金券金额
        voucherStatus: '未生效', // 代金券状态
    },{
        accountInfomartion: '账号:754831111111@qq.com', // 账户信息
        accountType: '支付宝', // 提现账户类型
        periodValidity: '长期', // 有效期
        assistantName: '文心一言', // AI助手名称
        sumConsumeToken: '100', // 总消耗量（k/tokens）
        giveToken: '80', // 赠送调用量（k/tokens）
        giveBalanceToken: 0, // 赠送剩余（k/tokens） 
        callModel: 'ERNIE-4.0-8K-Preview', // 调用模型
        realityNumL: 0.5, // 系统实际付费（元）
        profitStatus: '盈利', // 盈利情况
        profitNum: '0.607', // 盈利额（元）
        consumptionAmount: 0.612, // 消费金额（元）
        consumeToken: 5.1, // 消耗（（k/tokens）
        inputToken: 2, // 输入（k/tokens）
        outputToken: 3.1, // 输出（k/tokens）
        affiliation: '企业',
        accumulateType: '预存费用', // 充值类型
        payWay: '灵感值', // 支付方式
        payStatus: '已支付', // 支付状态
        payResult: '成功',
        num: 10,
        companyName: '延边州文旅局',
        allNum:'300',
        name: "姜星",
        account: '15589784563',
        date: '2024-06-18',
        status: '正常',
        giveNum: '200',
        accumulate: '300',
        spend: '400',
        balance: '100',
        invoice: '100',
        voucherType: '业务赠送', // 代金券类型
        voucherNum: '20', // 代金券金额
        voucherStatus: '未生效', // 代金券状态
    },{
        accountInfomartion: '账号:754831111111@qq.com', // 账户信息
        accountType: '支付宝', // 提现账户类型
        periodValidity: '长期', // 有效期
        assistantName: '文心一言', // AI助手名称
        sumConsumeToken: '100', // 总消耗量（k/tokens）
        giveToken: '80', // 赠送调用量（k/tokens）
        giveBalanceToken: 0, // 赠送剩余（k/tokens） 
        callModel: 'ERNIE-4.0-8K-Preview', // 调用模型
        realityNumL: 0.5, // 系统实际付费（元）
        profitStatus: '盈利', // 盈利情况
        profitNum: '0.607', // 盈利额（元）
        consumptionAmount: 0.612, // 消费金额（元）
        consumeToken: 5.1, // 消耗（（k/tokens）
        inputToken: 2, // 输入（k/tokens）
        outputToken: 3.1, // 输出（k/tokens）
        affiliation: '企业',
        accumulateType: '预存费用', // 充值类型
        payWay: '灵感值', // 支付方式
        payStatus: '已支付', // 支付状态
        payResult: '成功',
        num: 11,
        companyName: '长春工业大学计算机学院',
        allNum:'300',
        name: "孙茜",
        account: '19956568989',
        date: '2024-06-18',
        status: '正常',
        giveNum: '200',
        accumulate: '300',
        spend: '400',
        balance: '100',
        invoice: '100',
        voucherType: '业务赠送', // 代金券类型
        voucherNum: '20', // 代金券金额
        voucherStatus: '未生效', // 代金券状态
    }
];
export default tableData;
