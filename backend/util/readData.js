const fs = require('node:fs/promises');
const path = require('path'); // path

// boardPath
const boardPath = path.join(__dirname, '..', 'jsonData', 'Board.json');

async function readData() {
    const filePath = path.join(__dirname, '..', 'jsonData', 'users.json');

    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
}

//전체갯수
async function boardTotal() {
    const total = await fs.readFile(boardPath, 'utf8');
    return JSON.parse(total).length;
}

async function allBoardData() {
    const data = await fs.readFile(boardPath, 'utf8');
    return JSON.parse(data);
}

async function BoardData(page = 1, limit = 10) {
    const data = await fs.readFile(boardPath, 'utf8');
    const parseData = JSON.parse(data);

    const pageLimit = limit || 10;
    const startObj = ((page || 1) - 1) * pageLimit;
    const endObj = startObj + pageLimit;

    return parseData.slice(startObj, endObj);
}

async function BoardWirte(data) {
    await fs.writeFile(boardPath, JSON.stringify(data));
}

async function ProjectData() {
    const filePath = path.join(__dirname, '..', 'jsonData', 'project.json');
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
}

exports.readData = readData;
exports.boardTotal = boardTotal;
exports.allBoardData = allBoardData;
exports.BoardData = BoardData;
exports.BoardWirte = BoardWirte;
exports.ProjectData = ProjectData;
