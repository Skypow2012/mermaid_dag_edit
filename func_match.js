function extractFunctions(code) {
  // 正则表达式匹配函数定义
  // 匹配形如 function functionName(parameters) { ... }
  // 或者匿名函数形如 function(parameters) { ... }
  const regexs = [
    /\n\w.+ (\w*)\s*\(\s*[^)]*\)\s*\{[^]*?\n\}/g,
    /\nIMPLEMT.+ ([^ ]*?)\) \{[^]*?\n\}/g
  ]
  // 匹配所有函数定义
  const functions = [];
  const functionNames = [];
  for (regex of regexs) {
    let match;
    while ((match = regex.exec(code)) !== null) {
      functions.push(match[0]);
      functionNames.push(match[1]);
    }
  }

  return [functions, functionNames];
}

function getInnferUsedFunctions(code) {
  // 正则表达式匹配函数调用
  // 匹配形如 functionName(parameters)
  const regex = /(\w+)\(/g;

  // 匹配所有函数调用
  const usedFunctions = [];
  let match;
  while ((match = regex.exec(code)) !== null) {
    usedFunctions.push(match[1]);
  }

  return usedFunctions;
}

// 遍历所有的函数定义，提取函数名和函数体，整理成mermaid的图
function generateMermaidGraph(functions, functionNames) {
  let graph = 'graph LR\n';
  let functionNamesSet = new Set(functionNames);

  // 添加函数定义到图中
  functions.forEach((func, index) => {
    const name = functionNames[index];
    // graph += `  ${name}["${name}"]\n`;
    usedFunctions = getInnferUsedFunctions(func);
    // 添加函数调用关系
    usedFunctions.forEach((usedFunc) => {
      if (functionNamesSet.has(usedFunc) && usedFunc !== name) {
        graph += `  ${name} --> ${usedFunc}\n`;
      }
    });
  });


  return graph;
}

code = `
bool FuncA() {
  FuncA_B();
  FuncA_C();
}
bool FuncA_B() {
}
bool FuncA_C() {
}
`
b = extractFunctions(code);
mermaidGraph = generateMermaidGraph(b[0], b[1]);
console.log(mermaidGraph);
