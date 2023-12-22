const tileSize = 3
const world = document.getElementById('world');
const plane = document.getElementById('plane');

const tile = `<div style="
    width: ${tileSize}rem;
    height: ${tileSize}rem;
    background-color: #333;
    position: absolute;
"></div>`;

const FL = `<div class="obj" style="background-color: #b6d7a8;">FL</div>`;
const CV = `<div class="obj" style="background-color: #a2c4c9;">CV</div>`;
const PC = `<div class="obj" style="background-color: #f9cb9c;">PC</div>`;
const BW = `<div class="obj" style="background-color: #ffe599;">BW</div>`;
const CH = `<div class="obj" style="background-color: #d5a6bd;">CH</div>`;
const CO = `<div class="obj" style="background-color: #b4a7d6;">CO</div>`;

const PRD_01 = [
    [
        { class: 'bl bt' },
        { class: 'bt' },
        { class: 'bt' },
        { class: 'bt' },
        { class: 'bt br' },
    ],
    [
        { class: 'bl' },
        { },
        { },
        { },
        { class: 'br' },
    ],
    [
        { class: 'bl bb' },
        { class: 'bb' },
        { class: 'bb' },
        { class: 'bb' },
        { class: 'bb br' },
    ],
];

const PRD_02 = [
    [
        { class: 'bl bt' },
        { class: 'bt' },
        { class: 'bt' },
        { class: 'bt' },
        { class: 'bt br' },
    ],
    [
        { class: 'bl' },
        { class: 'bl bt bb bx', obj: BW },
        { class: 'bt bb bx', obj: CH },
        { class: 'bt br bb bx', obj: CO },
        { class: 'br' },
    ],
    [
        { class: 'bl' },
        { class: 'bl bb br bx', obj: FL },
        { class: '' },
        { class: 'bb' },
        { class: 'br bb' },
    ],
    [
        { class: 'bl bb' },
        { class: 'bb' },
        { class: 'bb br' },
    ],
];

const workUnit = [
    [
        { class: 'bl bt bb', obj: FL },
        { class: 'bt bb', obj: CV },
        { class: 'bt br bb', obj: PC },
    ],
];

const drawPlane = (x,y,map,bg) => {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {

            const tile = `<div class="tile ${map[i][j]?.class ?? ''}" style="
                width: ${tileSize}rem;
                height: ${tileSize}rem;
                left: ${(j+x)*tileSize}rem;
                top: ${(i+y)*tileSize}rem;
                background-color: ${bg};
            ">${map[i][j]?.obj ?? ''}</div>`;
            plane.insertAdjacentHTML('beforeend', tile);

        }
    }
}

drawPlane(0,0,PRD_01,'#d9ead3')
drawPlane(5,0,PRD_02,'#d9ead3')
drawPlane(1,1,workUnit,'')