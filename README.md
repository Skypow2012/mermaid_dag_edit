## 结果示例
graph TD n1["x"] n2["weight"] n3["antiquant_scale"] n4["antiquant_offset"] n5["bias"] n6["WeightQuantBatchMatmulV2"] n8["Transpose"] n1 --> n6 n3 --> n6 n4 --> n6 n5 --> n6 n2 --> n8 n8 --> n6

graph TD n1["x"] n2["weight"] n3["antiquant_scale"] n4["antiquant_offset"] n5["bias"] n6["WeightQuantBatchMatmulV2"] n1 --> n6 n3 --> n6 n4 --> n6 n5 --> n6 n2 --> n6

## 快捷键
a 添加节点
d 删除节点
esc 取消选中
右键在线上移动 删除边
选中节点后，按住ctrl再选目标节点 添加边

window的steps里存了添加删除的操作记录，用于回溯第一张图到第二张图的的操作过程
