/* parser generated by jison 0.4.2 */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"formula":4,"EOF":5,"expr":6,"function_call":7,"identifier":8,"(":9,")":10,"parameters":11,"parameter":12,",":13,"comp_expr":14,"expr0":15,"or_expr":16,"expr1":17,"and_expr":18,"expr2":19,"add_expr":20,"expr3":21,"mult_expr":22,"expr4":23,"exp_expr":24,"primary":25,"^":26,"*":27,"/":28,"+":29,"-":30,"&":31,"&&":32,"||":33,"comparator":34,"==":35,"=":36,"<>":37,"!=":38,"<=":39,"<":40,">=":41,">":42,"literal":43,"reference":44,"identifiers":45,".":46,"IDENTIFIER":47,"int_literal":48,"dec_literal":49,"quoted_string":50,"NUM":51,"str_literal":52,"STRING":53,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"(",10:")",13:",",26:"^",27:"*",28:"/",29:"+",30:"-",31:"&",32:"&&",33:"||",35:"==",36:"=",37:"<>",38:"!=",39:"<=",40:"<",41:">=",42:">",46:".",47:"IDENTIFIER",51:"NUM",53:"STRING"},
productions_: [0,[3,2],[4,1],[7,3],[7,4],[11,1],[11,3],[12,1],[6,1],[6,1],[15,1],[15,1],[17,1],[17,1],[19,1],[19,1],[21,1],[21,1],[23,1],[23,1],[24,3],[22,3],[22,3],[20,3],[20,3],[20,3],[18,3],[16,3],[14,3],[34,1],[34,1],[34,1],[34,1],[34,1],[34,1],[34,1],[34,1],[25,1],[25,1],[25,1],[25,3],[44,1],[45,1],[45,3],[8,1],[43,1],[43,1],[43,1],[48,1],[49,3],[50,1],[52,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 3: this.$ = new yy.FunctionCall( $$[$0-2], [] ); 
break;
case 4: this.$ = new yy.FunctionCall( $$[$0-3], $$[$0-1] ); 
break;
case 5: this.$ = [$$[$0]]; 
break;
case 6: this.$ = $$[$0-2]; this.$.push( $$[$0] ); 
break;
case 20: this.$ = new yy.InfixExpression( '^', $$[$0-2], $$[$0] ); 
break;
case 21: this.$ = new yy.InfixExpression( '*', $$[$0-2], $$[$0] ); 
break;
case 22: this.$ = new yy.InfixExpression( '/', $$[$0-2], $$[$0] ); 
break;
case 23: this.$ = new yy.InfixExpression( '+', $$[$0-2], $$[$0] ); 
break;
case 24: this.$ = new yy.InfixExpression( '-', $$[$0-2], $$[$0] ); 
break;
case 25: this.$ = new yy.InfixExpression( '&', $$[$0-2], $$[$0] ); 
break;
case 26: this.$ = new yy.InfixExpression( '&&', $$[$0-2], $$[$0] ); 
break;
case 27: this.$ = new yy.InfixExpression( '||', $$[$0-2], $$[$0] ); 
break;
case 28: this.$ = new yy.InfixExpression( $$[$0-1], $$[$0-2], $$[$0] ); 
break;
case 40: this.$ = new yy.Parens( $$[$0-1] ); 
break;
case 41: this.$ = new yy.Reference( $$[$0] ); 
break;
case 42: this.$ = [$$[$0]]; 
break;
case 43: this.$ = $$[$0-2]; this.$.push( $$[$0] ); 
break;
case 45: this.$ = new yy.IntegerLiteral( $$[$0] ); 
break;
case 49: this.$ = new yy.DecimalLiteral( $$[$0-2], $$[$0] ); 
break;
case 50: this.$ = new yy.StringLiteral( $$[$0].substring(1,$$[$0].length-1) ); 
break;
}
},
table: [{3:1,4:2,6:3,7:17,8:23,9:[1,19],14:4,15:5,16:6,17:7,18:8,19:9,20:10,21:11,22:12,23:13,24:14,25:15,43:16,44:18,45:24,47:[1,27],48:20,49:21,50:22,51:[1,25],52:26,53:[1,28]},{1:[3]},{5:[1,29]},{5:[2,2],10:[2,2],13:[2,2],34:30,35:[1,31],36:[1,32],37:[1,33],38:[1,34],39:[1,35],40:[1,36],41:[1,37],42:[1,38]},{5:[2,8],10:[2,8],13:[2,8],35:[2,8],36:[2,8],37:[2,8],38:[2,8],39:[2,8],40:[2,8],41:[2,8],42:[2,8]},{5:[2,9],10:[2,9],13:[2,9],33:[1,39],35:[2,9],36:[2,9],37:[2,9],38:[2,9],39:[2,9],40:[2,9],41:[2,9],42:[2,9]},{5:[2,10],10:[2,10],13:[2,10],33:[2,10],35:[2,10],36:[2,10],37:[2,10],38:[2,10],39:[2,10],40:[2,10],41:[2,10],42:[2,10]},{5:[2,11],10:[2,11],13:[2,11],32:[1,40],33:[2,11],35:[2,11],36:[2,11],37:[2,11],38:[2,11],39:[2,11],40:[2,11],41:[2,11],42:[2,11]},{5:[2,12],10:[2,12],13:[2,12],32:[2,12],33:[2,12],35:[2,12],36:[2,12],37:[2,12],38:[2,12],39:[2,12],40:[2,12],41:[2,12],42:[2,12]},{5:[2,13],10:[2,13],13:[2,13],29:[1,41],30:[1,42],31:[1,43],32:[2,13],33:[2,13],35:[2,13],36:[2,13],37:[2,13],38:[2,13],39:[2,13],40:[2,13],41:[2,13],42:[2,13]},{5:[2,14],10:[2,14],13:[2,14],29:[2,14],30:[2,14],31:[2,14],32:[2,14],33:[2,14],35:[2,14],36:[2,14],37:[2,14],38:[2,14],39:[2,14],40:[2,14],41:[2,14],42:[2,14]},{5:[2,15],10:[2,15],13:[2,15],27:[1,44],28:[1,45],29:[2,15],30:[2,15],31:[2,15],32:[2,15],33:[2,15],35:[2,15],36:[2,15],37:[2,15],38:[2,15],39:[2,15],40:[2,15],41:[2,15],42:[2,15]},{5:[2,16],10:[2,16],13:[2,16],27:[2,16],28:[2,16],29:[2,16],30:[2,16],31:[2,16],32:[2,16],33:[2,16],35:[2,16],36:[2,16],37:[2,16],38:[2,16],39:[2,16],40:[2,16],41:[2,16],42:[2,16]},{5:[2,17],10:[2,17],13:[2,17],26:[1,46],27:[2,17],28:[2,17],29:[2,17],30:[2,17],31:[2,17],32:[2,17],33:[2,17],35:[2,17],36:[2,17],37:[2,17],38:[2,17],39:[2,17],40:[2,17],41:[2,17],42:[2,17]},{5:[2,18],10:[2,18],13:[2,18],26:[2,18],27:[2,18],28:[2,18],29:[2,18],30:[2,18],31:[2,18],32:[2,18],33:[2,18],35:[2,18],36:[2,18],37:[2,18],38:[2,18],39:[2,18],40:[2,18],41:[2,18],42:[2,18]},{5:[2,19],10:[2,19],13:[2,19],26:[2,19],27:[2,19],28:[2,19],29:[2,19],30:[2,19],31:[2,19],32:[2,19],33:[2,19],35:[2,19],36:[2,19],37:[2,19],38:[2,19],39:[2,19],40:[2,19],41:[2,19],42:[2,19]},{5:[2,37],10:[2,37],13:[2,37],26:[2,37],27:[2,37],28:[2,37],29:[2,37],30:[2,37],31:[2,37],32:[2,37],33:[2,37],35:[2,37],36:[2,37],37:[2,37],38:[2,37],39:[2,37],40:[2,37],41:[2,37],42:[2,37]},{5:[2,38],10:[2,38],13:[2,38],26:[2,38],27:[2,38],28:[2,38],29:[2,38],30:[2,38],31:[2,38],32:[2,38],33:[2,38],35:[2,38],36:[2,38],37:[2,38],38:[2,38],39:[2,38],40:[2,38],41:[2,38],42:[2,38]},{5:[2,39],10:[2,39],13:[2,39],26:[2,39],27:[2,39],28:[2,39],29:[2,39],30:[2,39],31:[2,39],32:[2,39],33:[2,39],35:[2,39],36:[2,39],37:[2,39],38:[2,39],39:[2,39],40:[2,39],41:[2,39],42:[2,39]},{4:47,6:3,7:17,8:23,9:[1,19],14:4,15:5,16:6,17:7,18:8,19:9,20:10,21:11,22:12,23:13,24:14,25:15,43:16,44:18,45:24,47:[1,27],48:20,49:21,50:22,51:[1,25],52:26,53:[1,28]},{5:[2,45],10:[2,45],13:[2,45],26:[2,45],27:[2,45],28:[2,45],29:[2,45],30:[2,45],31:[2,45],32:[2,45],33:[2,45],35:[2,45],36:[2,45],37:[2,45],38:[2,45],39:[2,45],40:[2,45],41:[2,45],42:[2,45],46:[1,48]},{5:[2,46],10:[2,46],13:[2,46],26:[2,46],27:[2,46],28:[2,46],29:[2,46],30:[2,46],31:[2,46],32:[2,46],33:[2,46],35:[2,46],36:[2,46],37:[2,46],38:[2,46],39:[2,46],40:[2,46],41:[2,46],42:[2,46]},{5:[2,47],10:[2,47],13:[2,47],26:[2,47],27:[2,47],28:[2,47],29:[2,47],30:[2,47],31:[2,47],32:[2,47],33:[2,47],35:[2,47],36:[2,47],37:[2,47],38:[2,47],39:[2,47],40:[2,47],41:[2,47],42:[2,47]},{5:[2,42],9:[1,49],10:[2,42],13:[2,42],26:[2,42],27:[2,42],28:[2,42],29:[2,42],30:[2,42],31:[2,42],32:[2,42],33:[2,42],35:[2,42],36:[2,42],37:[2,42],38:[2,42],39:[2,42],40:[2,42],41:[2,42],42:[2,42],46:[2,42]},{5:[2,41],10:[2,41],13:[2,41],26:[2,41],27:[2,41],28:[2,41],29:[2,41],30:[2,41],31:[2,41],32:[2,41],33:[2,41],35:[2,41],36:[2,41],37:[2,41],38:[2,41],39:[2,41],40:[2,41],41:[2,41],42:[2,41],46:[1,50]},{5:[2,48],10:[2,48],13:[2,48],26:[2,48],27:[2,48],28:[2,48],29:[2,48],30:[2,48],31:[2,48],32:[2,48],33:[2,48],35:[2,48],36:[2,48],37:[2,48],38:[2,48],39:[2,48],40:[2,48],41:[2,48],42:[2,48],46:[2,48]},{5:[2,50],10:[2,50],13:[2,50],26:[2,50],27:[2,50],28:[2,50],29:[2,50],30:[2,50],31:[2,50],32:[2,50],33:[2,50],35:[2,50],36:[2,50],37:[2,50],38:[2,50],39:[2,50],40:[2,50],41:[2,50],42:[2,50]},{5:[2,44],9:[2,44],10:[2,44],13:[2,44],26:[2,44],27:[2,44],28:[2,44],29:[2,44],30:[2,44],31:[2,44],32:[2,44],33:[2,44],35:[2,44],36:[2,44],37:[2,44],38:[2,44],39:[2,44],40:[2,44],41:[2,44],42:[2,44],46:[2,44]},{5:[2,51],10:[2,51],13:[2,51],26:[2,51],27:[2,51],28:[2,51],29:[2,51],30:[2,51],31:[2,51],32:[2,51],33:[2,51],35:[2,51],36:[2,51],37:[2,51],38:[2,51],39:[2,51],40:[2,51],41:[2,51],42:[2,51]},{1:[2,1]},{7:17,8:23,9:[1,19],15:51,16:6,17:7,18:8,19:9,20:10,21:11,22:12,23:13,24:14,25:15,43:16,44:18,45:24,47:[1,27],48:20,49:21,50:22,51:[1,25],52:26,53:[1,28]},{9:[2,29],47:[2,29],51:[2,29],53:[2,29]},{9:[2,30],47:[2,30],51:[2,30],53:[2,30]},{9:[2,31],47:[2,31],51:[2,31],53:[2,31]},{9:[2,32],47:[2,32],51:[2,32],53:[2,32]},{9:[2,33],47:[2,33],51:[2,33],53:[2,33]},{9:[2,34],47:[2,34],51:[2,34],53:[2,34]},{9:[2,35],47:[2,35],51:[2,35],53:[2,35]},{9:[2,36],47:[2,36],51:[2,36],53:[2,36]},{7:17,8:23,9:[1,19],17:52,18:8,19:9,20:10,21:11,22:12,23:13,24:14,25:15,43:16,44:18,45:24,47:[1,27],48:20,49:21,50:22,51:[1,25],52:26,53:[1,28]},{7:17,8:23,9:[1,19],19:53,20:10,21:11,22:12,23:13,24:14,25:15,43:16,44:18,45:24,47:[1,27],48:20,49:21,50:22,51:[1,25],52:26,53:[1,28]},{7:17,8:23,9:[1,19],21:54,22:12,23:13,24:14,25:15,43:16,44:18,45:24,47:[1,27],48:20,49:21,50:22,51:[1,25],52:26,53:[1,28]},{7:17,8:23,9:[1,19],21:55,22:12,23:13,24:14,25:15,43:16,44:18,45:24,47:[1,27],48:20,49:21,50:22,51:[1,25],52:26,53:[1,28]},{7:17,8:23,9:[1,19],21:56,22:12,23:13,24:14,25:15,43:16,44:18,45:24,47:[1,27],48:20,49:21,50:22,51:[1,25],52:26,53:[1,28]},{7:17,8:23,9:[1,19],23:57,24:14,25:15,43:16,44:18,45:24,47:[1,27],48:20,49:21,50:22,51:[1,25],52:26,53:[1,28]},{7:17,8:23,9:[1,19],23:58,24:14,25:15,43:16,44:18,45:24,47:[1,27],48:20,49:21,50:22,51:[1,25],52:26,53:[1,28]},{7:17,8:23,9:[1,19],25:59,43:16,44:18,45:24,47:[1,27],48:20,49:21,50:22,51:[1,25],52:26,53:[1,28]},{10:[1,60]},{48:61,51:[1,25]},{4:65,6:3,7:17,8:23,9:[1,19],10:[1,62],11:63,12:64,14:4,15:5,16:6,17:7,18:8,19:9,20:10,21:11,22:12,23:13,24:14,25:15,43:16,44:18,45:24,47:[1,27],48:20,49:21,50:22,51:[1,25],52:26,53:[1,28]},{8:66,47:[1,27]},{5:[2,28],10:[2,28],13:[2,28],33:[1,39],35:[2,28],36:[2,28],37:[2,28],38:[2,28],39:[2,28],40:[2,28],41:[2,28],42:[2,28]},{5:[2,27],10:[2,27],13:[2,27],32:[1,40],33:[2,27],35:[2,27],36:[2,27],37:[2,27],38:[2,27],39:[2,27],40:[2,27],41:[2,27],42:[2,27]},{5:[2,26],10:[2,26],13:[2,26],29:[1,41],30:[1,42],31:[1,43],32:[2,26],33:[2,26],35:[2,26],36:[2,26],37:[2,26],38:[2,26],39:[2,26],40:[2,26],41:[2,26],42:[2,26]},{5:[2,23],10:[2,23],13:[2,23],27:[1,44],28:[1,45],29:[2,23],30:[2,23],31:[2,23],32:[2,23],33:[2,23],35:[2,23],36:[2,23],37:[2,23],38:[2,23],39:[2,23],40:[2,23],41:[2,23],42:[2,23]},{5:[2,24],10:[2,24],13:[2,24],27:[1,44],28:[1,45],29:[2,24],30:[2,24],31:[2,24],32:[2,24],33:[2,24],35:[2,24],36:[2,24],37:[2,24],38:[2,24],39:[2,24],40:[2,24],41:[2,24],42:[2,24]},{5:[2,25],10:[2,25],13:[2,25],27:[1,44],28:[1,45],29:[2,25],30:[2,25],31:[2,25],32:[2,25],33:[2,25],35:[2,25],36:[2,25],37:[2,25],38:[2,25],39:[2,25],40:[2,25],41:[2,25],42:[2,25]},{5:[2,21],10:[2,21],13:[2,21],26:[1,46],27:[2,21],28:[2,21],29:[2,21],30:[2,21],31:[2,21],32:[2,21],33:[2,21],35:[2,21],36:[2,21],37:[2,21],38:[2,21],39:[2,21],40:[2,21],41:[2,21],42:[2,21]},{5:[2,22],10:[2,22],13:[2,22],26:[1,46],27:[2,22],28:[2,22],29:[2,22],30:[2,22],31:[2,22],32:[2,22],33:[2,22],35:[2,22],36:[2,22],37:[2,22],38:[2,22],39:[2,22],40:[2,22],41:[2,22],42:[2,22]},{5:[2,20],10:[2,20],13:[2,20],26:[2,20],27:[2,20],28:[2,20],29:[2,20],30:[2,20],31:[2,20],32:[2,20],33:[2,20],35:[2,20],36:[2,20],37:[2,20],38:[2,20],39:[2,20],40:[2,20],41:[2,20],42:[2,20]},{5:[2,40],10:[2,40],13:[2,40],26:[2,40],27:[2,40],28:[2,40],29:[2,40],30:[2,40],31:[2,40],32:[2,40],33:[2,40],35:[2,40],36:[2,40],37:[2,40],38:[2,40],39:[2,40],40:[2,40],41:[2,40],42:[2,40]},{5:[2,49],10:[2,49],13:[2,49],26:[2,49],27:[2,49],28:[2,49],29:[2,49],30:[2,49],31:[2,49],32:[2,49],33:[2,49],35:[2,49],36:[2,49],37:[2,49],38:[2,49],39:[2,49],40:[2,49],41:[2,49],42:[2,49]},{5:[2,3],10:[2,3],13:[2,3],26:[2,3],27:[2,3],28:[2,3],29:[2,3],30:[2,3],31:[2,3],32:[2,3],33:[2,3],35:[2,3],36:[2,3],37:[2,3],38:[2,3],39:[2,3],40:[2,3],41:[2,3],42:[2,3]},{10:[1,67],13:[1,68]},{10:[2,5],13:[2,5]},{10:[2,7],13:[2,7]},{5:[2,43],10:[2,43],13:[2,43],26:[2,43],27:[2,43],28:[2,43],29:[2,43],30:[2,43],31:[2,43],32:[2,43],33:[2,43],35:[2,43],36:[2,43],37:[2,43],38:[2,43],39:[2,43],40:[2,43],41:[2,43],42:[2,43],46:[2,43]},{5:[2,4],10:[2,4],13:[2,4],26:[2,4],27:[2,4],28:[2,4],29:[2,4],30:[2,4],31:[2,4],32:[2,4],33:[2,4],35:[2,4],36:[2,4],37:[2,4],38:[2,4],39:[2,4],40:[2,4],41:[2,4],42:[2,4]},{4:65,6:3,7:17,8:23,9:[1,19],12:69,14:4,15:5,16:6,17:7,18:8,19:9,20:10,21:11,22:12,23:13,24:14,25:15,43:16,44:18,45:24,47:[1,27],48:20,49:21,50:22,51:[1,25],52:26,53:[1,28]},{10:[2,6],13:[2,6]}],
defaultActions: {29:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* generated by jison-lex 0.1.0 */
var lexer = (function(){
var lexer = {
EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: /* ignore */         
break;
case 1: return 9;          
break;
case 2: return 10;          
break;
case 3: return 29;          
break;
case 4: return 30;          
break;
case 5: return 27;          
break;
case 6: return 28;          
break;
case 7: return 26;          
break;
case 8: return 35;         
break;
case 9: return 36;          
break;
case 10: return 37;         
break;
case 11: return 38;         
break;
case 12: return 39;         
break;
case 13: return 41;         
break;
case 14: return 40;          
break;
case 15: return 42;          
break;
case 16: return 32;         
break;
case 17: return 33;         
break;
case 18: return 31;          
break;
case 19: return 46;          
break;
case 20: return 13;          
break;
case 21: return 47; 
break;
case 22: return 51;        
break;
case 23: return 53;     
break;
case 24: return 53;     
break;
case 25: return 5;        
break;
}
},
rules: [/^(?:\s+)/,/^(?:\()/,/^(?:\))/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:\^)/,/^(?:==)/,/^(?:=)/,/^(?:<>)/,/^(?:!=)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:&)/,/^(?:\.)/,/^(?:,)/,/^(?:\$?[a-zA-Z][_a-zA-Z0-9]*)/,/^(?:[0-9]+)/,/^(?:"[^"]*")/,/^(?:'[^']*')/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}