# 不同字体大小在同行文本中的显示
## 默认情况底部对齐
默认情况下，vertical-align以baseline作为对齐标准，表现为以文本的底部对齐。每个span的内容区域由它的line-height决定，而line-height = font-size * 默认值，所以字体更大的文本得到的空白部分就会更多，表现为字体小的文字背景内容会距离下方有一定的间隔。

![](./image/img1.jpg)
## 居中对齐
居中对齐只需要将默认的baseline，设置为middle即可。如果父容器的高度已知，将父容器的line-height设置成height的值，也可以实现居中对齐。
```
  .row span {
      vertical-align: middle;
    }
```
## 文字顶部对齐
如果想要文字以顶部对齐，直接设置为top或者text-top是没有用的，这时候顶部对齐的是span的内容区域，根据第一种情况的公式，字体小的文字会偏高一些。
可以通过将vertical-align：-50%，设置为负百分比的方式，但是需要慢慢调
