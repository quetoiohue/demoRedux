export function toggleIsAdding() {
    return { type: 'TOGGLE_ISADDING' };
}

export function addWord(en, vn) {
   return { type: 'ADD_WORD', en, vn };
}

export function toggleMemorized(id) {
    return { type: 'TOGGLE_MEMORIZED', id };
}

export function toggleIsShow( id ) {
    return { type: 'TOGGLE_ISSHOW' };
}

export function showAll (){
    return { type: 'FILTER_SHOW_ALL'};
}

export function showMemorized (){
    return { type: 'FILTER_MEMORIZED'};
}

export function showNeedPractice (){
    return { type: 'FILTER_NEED_PRACTICE'};
}