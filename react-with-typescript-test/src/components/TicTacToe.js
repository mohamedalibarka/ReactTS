"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Game = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
require("./TicTacToe.css");
function Square(props) {
    return ((0, jsx_runtime_1.jsx)("button", __assign({ className: "square", onClick: props.onClick }, { children: props.value }), void 0));
}
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Board.prototype.renderSquare = function (i) {
        var _this = this;
        return (0, jsx_runtime_1.jsx)(Square, { value: this.props.squares[i], onClick: function () { return _this.props.onClick(i); } }, void 0);
    };
    Board.prototype.render = function () {
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "board-row" }, { children: [this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "board-row" }, { children: [this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "board-row" }, { children: [this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)] }), void 0)] }, void 0));
    };
    return Board;
}(react_1["default"].Component));
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            history: [{
                    squares: Array(9).fill(null)
                }],
            xIsNext: true,
            stepNumber: 0
        };
        return _this;
    }
    Game.prototype.jumpTo = function (step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    };
    Game.prototype.handleClick = function (i) {
        var history = this.state.history.slice(0, this.state.stepNumber + 1);
        var current = history[history.length - 1];
        var squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                    squares: squares
                }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    };
    Game.prototype.render = function () {
        var _this = this;
        var history = this.state.history;
        var current = history[this.state.stepNumber];
        var winner = calculateWinner(current.squares);
        var moves = history.map(function (step, move) {
            var desc = move ?
                'Revenir au tour n°' + move :
                'Revenir au début de la partie';
            return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return _this.jumpTo(move); } }, { children: desc }), void 0) }, move));
        });
        var status;
        if (winner) {
            status = winner + ' a gagné';
        }
        else {
            status = 'Prochain joueur : ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "game" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "game-board" }, { children: (0, jsx_runtime_1.jsx)(Board, { squares: current.squares, onClick: function (i) { return _this.handleClick(i); } }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "game-info" }, { children: [(0, jsx_runtime_1.jsx)("div", { children: status }, void 0), (0, jsx_runtime_1.jsx)("ol", { children: moves }, void 0)] }), void 0)] }), void 0));
    };
    return Game;
}(react_1["default"].Component));
exports.Game = Game;
function calculateWinner(squares) {
    var lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (var i = 0; i < lines.length; i++) {
        var _a = lines[i], a = _a[0], b = _a[1], c = _a[2];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
