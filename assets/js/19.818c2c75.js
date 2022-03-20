(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{501:function(t,a,v){"use strict";v.r(a);var _=v(14),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"运行时数据区域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运行时数据区域"}},[t._v("#")]),t._v(" 运行时数据区域")]),t._v(" "),v("p",[t._v("我们都知道，Java代码是要运行在虚拟机上的，而虚拟机在执行Java程序的过程中会把所管理的内存划分为若干个不同的数据区域，这些区域都有各自的用途。其中有些区域随着虚拟机进程的启动而存在，而有些区域则依赖用户线程的启动和结束而建立和销毁。在《Java虚拟机规范（Java SE 8）》中描述了JVM运行时内存区域结构如下：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513180317.png",alt:""}})]),t._v(" "),v("p",[t._v("由上图可知，"),v("strong",[t._v("Java虚拟机管理的内存包括几个运行时数据内存：程序计数器、虚拟机栈、本地方法栈、堆和方法区，其中方法区和堆是线程共享的数据区，其他几个是线程隔离的数据区")]),t._v("。")]),t._v(" "),v("h2",{attrs:{id:"程序计数器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器"}},[t._v("#")]),t._v(" 程序计数器")]),t._v(" "),v("p",[v("strong",[t._v("程序计数器（Program Counter Register）是一块较小的内存空间，它可以看作是当前线程所执行的字节码的行号指示。")])]),t._v(" "),v("p",[t._v("在虚拟机的槪念模型里，字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。")]),t._v(" "),v("p",[t._v("每条线程都需要有一个独立的程序计数器，这是因为多线程是通过轮流切换并分配处理器执行时间的方式工作的，每条线程都需要记录当前执行位置以便下一次能够继续执行。")]),t._v(" "),v("p",[t._v("如果线程正在执行的是一个Java方法，这个计数器记录的是正在执行的虚拟机字节码指令的地址：如果正在执行的是Native方法，这个计数器值则为空（Undefined)。此内存区域是唯一一个在java虚拟机规范中没有规定任何OutOfMemoryError情况的区域。")]),t._v(" "),v("h2",{attrs:{id:"虚拟机栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机栈"}},[t._v("#")]),t._v(" 虚拟机栈")]),t._v(" "),v("h3",{attrs:{id:"虚拟机栈结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机栈结构"}},[t._v("#")]),t._v(" 虚拟机栈结构")]),t._v(" "),v("p",[t._v("与程序计数器一样，Java虚拟机栈（Java Virtual Machine Stacks）也是线程私有的，它的生命周期与线程相同，虚拟机栈描述的是Java方法执行的内存模型；"),v("strong",[t._v("每个方法在执行的同时都会创建一个栈帧（Stack Frame）用于存储局部变量表、操作数栈、动态链接、方法出口等信息")]),t._v("。每一个方法从调用直至执行完成的过程.就对应着一个栈帧在虚拟机栈中入栈到出栈的过程。因此，虚拟机栈中栈帧的入栈顺序就是方法调用顺序。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513180329.png",alt:""}})]),t._v(" "),v("p",[t._v("每一个栈帧都包括了局部变量表、操作数栈、动态连接、方法返回地址和一些额外的附加信息。在编译程序代码的时候，栈帧中需要多大的局部变量表，多深的操作数栈都已经完全确定了，并且写入到方法表的Code属性之中。")]),t._v(" "),v("p",[t._v("我们回顾一下之前学的Code属性，以下面这段代码为例：")]),t._v(" "),v("div",{staticClass:"language-java line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-java"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OperandStackDemo")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("operandStackTest")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" c"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br")])]),v("p",[t._v("使用"),v("code",[t._v("javap -v -private")]),t._v("解析class文件，得到operandStackTest()方法的属性如下：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513180345.png",alt:""}})]),t._v(" "),v("p",[t._v("stack=2, locals=4已经分别指明了操作数栈最大深度为2，局部变量表最大需要4 slot的存储空间。")]),t._v(" "),v("p",[t._v("一个线程中的方法调用链可能会很长，很多方法都同时处于执行状态。对于执行引擎来说，在活动线程中，只有位于栈顶的栈帧才是有效的。称为"),v("strong",[t._v("当前栈帧（Current Stack Frame）")]),t._v("。与这个栈帧相关联的方法称为"),v("strong",[t._v("当前方法（Current Method）")]),t._v("。执行引擎运行的所有字节码指令都只针对当前栈帧进行操作。")]),t._v(" "),v("p",[t._v("接下来详细讲解一下栈帧中的局部变量表、操作数栈、动态连接、方法返回地址等各个 部分的作用和数据结构。")]),t._v(" "),v("h3",{attrs:{id:"栈帧-局部变量表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#栈帧-局部变量表"}},[t._v("#")]),t._v(" 栈帧---局部变量表")]),t._v(" "),v("p",[t._v("局都变量表是一组变量值存储空间，用于存放方法参数和方法内\n部定义的局部变量。")]),t._v(" "),v("p",[t._v("局部变量表的容量以变量槽（slot）为最小单位。一个Slot可以存放一个32位以内的数据类型，对于64位的数据类型，虚拟机会以髙位对齐的方式为其分配两个连续的Slot空间。")]),t._v(" "),v("p",[t._v("虚拟机通过索引定位的方式使用局部变量表，索引值的范围是从0开始至局部变量表最大的Slot数量。如果访问的是32位数据类型的变量，索引n就代表了使用第n个Slot。如果是64位数据类型的变量，则说明会同时使用n和n+1两个Slot。")]),t._v(" "),v("p",[t._v("在方法执行时，虚拟机是使用局部变量表完成参数值到参数变量列表的传递过程的，"),v("strong",[t._v("如果执行的是实例方法（非static的方法)，那局部变量表中第0位索引的Slot默认是用于传递方法所属对象实例的引用。在方法中可以通过关键字“this”来访问到这个隐含的参数。其余参数则按照参数表顺序排列，占用从1开始的局部变量Slot")]),t._v("，参数表分配完毕后，再根据方法体内部定义的变虽顺序和作用域分配其余的Slot。")]),t._v(" "),v("p",[v("strong",[t._v("局部变量表中的变量不可直接使用，如需使用必须通过相关指令将其加载至操作数栈中作为操作数使用。")])]),t._v(" "),v("h3",{attrs:{id:"栈帧-操作数栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#栈帧-操作数栈"}},[t._v("#")]),t._v(" 栈帧---操作数栈")]),t._v(" "),v("p",[t._v("操作数栈（Operand Stack)也常称为操作栈，它是一个基本的栈来实现数据结构，那么它自然也遵守栈的后入先出的原则。操作数栈的每一个元素可以是任意的Java数据类塑，包括long和 double。32位数据类型所占的栈容量为1，64位数据类型所占的栈容置为2。在方法执行的任何时候，操作数栈的深度都不会超过在max_stacks数据项中设定的最大值。")]),t._v(" "),v("p",[v("strong",[t._v("当一个方法刚刚开始执行的时候，这个方法的操作数栈是空的")]),t._v("，在方法的执行过程中，会有各种字节码指令往操作数栈中写入和提取内容，也就是出栈/入栈操作。")]),t._v(" "),v("p",[t._v("操作数栈中元素的数据类型必须与字节码指令的序列严格匹配，在编译程序代码的时候，编译器要严格保证这一点。在类校验阶段的数据流分析中还要再次验证这一点，以iadd指令为例，这个指令用于整型数加法，它在执行时最接近栈顶的两个元素的数据类型必须为int型，不能出现一个long和一个float使用iadd命令相加的情况。")]),t._v(" "),v("h3",{attrs:{id:"栈帧-动态链接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#栈帧-动态链接"}},[t._v("#")]),t._v(" 栈帧---动态链接")]),t._v(" "),v("p",[t._v("每个栈帧都包含一个指向运行时常量池中该栈帧所属方法的引用，持有这个引用是为了支持方法调用过程中的动态链接。")]),t._v(" "),v("p",[t._v("在说明什么是动态链接之前先看看方法的大概调用过程，首先在虚拟机运行的时候，运行时常量池会保存大量的符号引用，这些符号引用可以看成是每个方法的间接引用，如果代表栈帧A的方法想调用代表栈帧B的方法，那么这个虚拟机的方法调用指令就会以B方法的符号引用作为参数，但是因为符号引用并不是直接指向代表B方法的内存位置，所以在调用之前还必须要将符号引用转换为直接引用，然后通过直接引用才可以访问到真正的方法。")]),t._v(" "),v("p",[t._v("如果符号引用是在类加载阶段或者第一次使用的时候转化为直接引用，那么这种转换成为静态解析；如果是在运行期间转换为直接引用，那么这种转换就成为动态链接。")]),t._v(" "),v("h3",{attrs:{id:"栈帧-方法出口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#栈帧-方法出口"}},[t._v("#")]),t._v(" 栈帧---方法出口")]),t._v(" "),v("p",[t._v("方法的返回分为两种情况，一种是正常退出，退出后会根据方法的定义来决定是否要传返回值给上层的调用者，一种是异常导致的方法结束，这种情况是不会传返回值给上层的调用方法。")]),t._v(" "),v("p",[t._v("不过无论是那种方式的方法结束，在退出当前方法时都会跳转到当前方法被调用的位置，如果方法是正常退出的，则调用者的程序计数器的值就可以作为返回地址，如果是因为异常退出的，是需要通过异常处理表来确定。")]),t._v(" "),v("p",[t._v("在方法的的一次调用就对应着栈帧在虚拟机栈中的一次入栈出栈操作，因此方法退出时可能做的事情包括：恢复上层方法的局部变量表以及操作数栈，如果有返回值的话，就把返回值压入到调用者栈帧的操作数栈中，还会把程序计数器的值调整为方法调用入口的下一条指令。")]),t._v(" "),v("h3",{attrs:{id:"方法实例解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方法实例解析"}},[t._v("#")]),t._v(" 方法实例解析")]),t._v(" "),v("p",[t._v("我们通过解析operandStackTest()方法的字节码指令看看方法执行时栈帧内部时如何操作的：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字节码行号")]),t._v(" "),v("th",[t._v("字节码指令")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("iconst_1")]),t._v(" "),v("td",[t._v("int类型1压栈")])]),t._v(" "),v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("istore_1")]),t._v(" "),v("td",[t._v("栈顶出栈，把int=1存入局部变量表中索引为1的slot中,也就是变量a的存储空间")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("iconst_2")]),t._v(" "),v("td",[t._v("int类型2压栈")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("istore_2")]),t._v(" "),v("td",[t._v("栈顶出栈，把int=2存入局部变量表中索引为2的slot中,也就是变量b的存储空间")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("iload_1")]),t._v(" "),v("td",[t._v("把局部变量表中索引为1的sloat中存储的数据压栈，也就是变量a的值")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("iload_2")]),t._v(" "),v("td",[t._v("把局部变量表中索引为2的sloat中存储的数据压栈，也就是变量b的值")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("iadd")]),t._v(" "),v("td",[t._v("将栈顶的两个元出栈后求和，再压栈")])]),t._v(" "),v("tr",[v("td",[t._v("7")]),t._v(" "),v("td",[t._v("istore_3")]),t._v(" "),v("td",[t._v("将栈顶元素（求和之后的值）放入局部变量表中索引为3的slot中，也就是变量c")])]),t._v(" "),v("tr",[v("td",[t._v("8")]),t._v(" "),v("td",[t._v("iload_3")]),t._v(" "),v("td",[t._v("把局部变量表中索引为3的slot中存储的数据压栈，也就是变量c的值")])]),t._v(" "),v("tr",[v("td",[t._v("9")]),t._v(" "),v("td",[t._v("ireturn")]),t._v(" "),v("td",[t._v("栈顶元素出栈，返回结果")])])])]),t._v(" "),v("p",[t._v("通过分析字节码指令我们可以知道：局部变量表中的变量必须通过相关指令将其加载至操作数栈中作为操作数使用，操作数栈随着字节码指令的执行不断在进行入栈和出栈动作，在第5步执行完后操作数栈达到最大深度。方法执行完毕后操作数栈正好清空。")]),t._v(" "),v("p",[t._v("关于字节码指令，我们怎么知道它代表什么含义呢？")]),t._v(" "),v("p",[t._v("我其实不太建议死记硬背，用到的时候再去查就行了，附上官方文档地址："),v("a",{attrs:{href:"https://docs.oracle.com/javase/specs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点我"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("这里再次推荐IDEA的jclasslib插件，用它查看字节码指令时，点击指令可以直接跳转到官方文档说明，妈妈再也不用担心我看不懂字节码指令了(^_^)。")]),t._v(" "),v("h3",{attrs:{id:"虚拟机栈异常与调优"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机栈异常与调优"}},[t._v("#")]),t._v(" 虚拟机栈异常与调优")]),t._v(" "),v("p",[t._v("在Java虚拟机规范中，对虚拟机栈规定了两种异常状况：StackOverflowError和OutOfMemoryError：")]),t._v(" "),v("ul",[v("li",[t._v("如果线程请求的栈深度大于虚拟机所允许的最大深度，将抛出StackOverflowError异常；")]),t._v(" "),v("li",[t._v("如果虚拟机在扩展栈时无法申请到足够的内存空间，则抛出OutOfMemoryError异常")])]),t._v(" "),v("p",[t._v("这里把异常分成两种情况看似更加严谨，但却存在着一些互相重叠的地方：当栈空间无法继续分配时，到底是内存太小，还是已使用的栈空间太大，其本质上只是对同一件事情的两种描述而已。")]),t._v(" "),v("p",[t._v("在单个线程下，无论是由于栈帧太大，还是虚拟机栈容量太小，当内存无法分配的时候，虚拟机抛出的都是StackOverflowError异常。通过不断地建立线程的方式倒是可以产生OutOfMemoryError，但是，这样产生的内存溢出异常与栈空间是否足够大并不存在任何联系，或者准确地说，在这种情况下，给每个线程的栈分配的内存越大，反而越容易产生内存溢出异常。原因其实不难理解，操作系统分配给每个进程的内存是有限制的。")]),t._v(" "),v("p",[v("strong",[t._v("使用-Xss参数可以设置栈的大小，栈的大小直接决定函数调用的可达深度")]),t._v("。")]),t._v(" "),v("blockquote",[v("p",[t._v("-Xss"),v("em",[t._v("size")]),v("br"),v("br"),t._v("\n设置线程堆栈大小（以字节为单位）。附加字母k或K表示KB，m或M表示MB，g或G表示GB。默认值取决于虚拟内存。\n以下示例以不同的单位将线程堆栈大小设置为1024 KB：\n-Xss1m;-Xss1024k;-Xss1048576"),v("br"),v("br"),t._v("\n此选项相当于-XX:ThreadStackSize")])]),t._v(" "),v("h2",{attrs:{id:"本地方法栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#本地方法栈"}},[t._v("#")]),t._v(" 本地方法栈")]),t._v(" "),v("p",[t._v("本地方法栈的功能和特点类似于虚拟机栈，其内部存放的也是栈帧，均具有线程隔离的特点以及都能抛出StackOverflowError和OutOfMemoryError异常。")]),t._v(" "),v("p",[t._v("不同的是，本地方法栈服务的对象是JVM执行的native方法，而虚拟机栈服务的是JVM执行的java方法。如何去服务native方法？native方法使用什么语言实现？怎么组织像栈帧这种为了服务方法的数据结构？虚拟机规范并未给出强制规定，因此不同的虚拟机实可以进行自由实现，"),v("strong",[t._v("我们常用的HotSpot虚拟机选择合并了虚拟机栈和本地方法栈")]),t._v("。")]),t._v(" "),v("h2",{attrs:{id:"java堆"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java堆"}},[t._v("#")]),t._v(" Java堆")]),t._v(" "),v("h3",{attrs:{id:"java堆概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java堆概述"}},[t._v("#")]),t._v(" Java堆概述")]),t._v(" "),v("p",[t._v("大多数情况下，Java堆（Java Heap)是Java虚拟机所管理的内存中最大的一块，不要求物理连续，可以固定大小，也可以动态扩展。Java堆是被所有线程共享的一块内存区域，在虚拟机启动时创建。"),v("strong",[t._v("此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例和数组都在这里分配内存")]),t._v("。")]),t._v(" "),v("p",[t._v("Java堆是垃圾收集器管理的主要区域。此很多时候也被称做“GC堆”\n。在HotSpotVM中将堆细分为新生代、老年代，新生代又分为Eden、S0、S1区，他们都和GC相关。S0又叫From Survivor、S1又叫To Survivor。这些概念会在后续GC章节中详细讲解。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513180404.png",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"堆内存和栈内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#堆内存和栈内存"}},[t._v("#")]),t._v(" 堆内存和栈内存")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("虚拟机栈")]),t._v(" "),v("th",[t._v("Java堆")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("线程私有")]),t._v(" "),v("td",[t._v("线程共享")])]),t._v(" "),v("tr",[v("td",[t._v("存放基本数据类型、对象的引用，局部变量")]),t._v(" "),v("td",[t._v("存放new创建的实例化对象及数组")])]),t._v(" "),v("tr",[v("td",[t._v("生命期跟随线程的生命期，线程结束栈内存也就释放")]),t._v(" "),v("td",[t._v("生命周期随虚拟机启动创建")])]),t._v(" "),v("tr",[v("td",[t._v("不存在垃圾回收问题")]),t._v(" "),v("td",[t._v("当堆内存中的数据不再被栈引用时，就会被gc回收")])]),t._v(" "),v("tr",[v("td",[t._v("栈内存中分配方法中基本类型的变量和对象的引用变量，没有默认初始化值")]),t._v(" "),v("td",[t._v("堆内存中所有的实体都有内存地址值，并且都有默认的初始值")])])])]),t._v(" "),v("h3",{attrs:{id:"java堆参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java堆参数"}},[t._v("#")]),t._v(" Java堆参数")]),t._v(" "),v("p",[t._v("当堆内存无法扩展时会抛出OOM异常，"),v("strong",[t._v("使用-Xms参数可以设置堆的初始容量（以字节为单位）")]),t._v("：")]),t._v(" "),v("blockquote",[v("p",[t._v("-Xms"),v("em",[t._v("size")]),v("br"),v("br"),t._v("\n设置堆的初始容量（以字节为单位）。该值必须是1024的倍数且大于1 MB。附加字母k或K表示千字节，m或M指示兆字节，\ng或G指示千兆字节。以下示例显示如何使用各种单位将分配的内存大小设置为6 MB：-Xms6291456；-Xms6144k；-Xms6m；"),v("br"),v("br"),t._v("\n如果未设置此选项，则初始容量将设置为老年代和年轻代分配的容量的总和。可以使用-Xmn选项或-XX:NewSize选项设置\n年轻代的堆的初始容量")])]),t._v(" "),v("p",[v("strong",[t._v("使用-Xmx参数指定内存分配池的最大容量")]),t._v("：")]),t._v(" "),v("blockquote",[v("p",[t._v("-Xmx"),v("em",[t._v("size")]),v("br"),v("br"),t._v("\n指定内存分配池的最大容量（以字节为单位），以字节为单位。该值必须是1024的倍数且大于2 MB。附加字母k或K表示千\n字节，m或M指示兆字节，g或G指示千兆字节。根据系统配置在运行时选择默认值。对于服务器部署，-Xms和-Xmx经常设\n置为相同的值。以下示例显示如何使用各种单位将分配的内存的最大允许大小设置为80 MB：-Xmx80m；-Xmx81920k"),v("br"),v("br"),t._v("\n该-Xmx选项相当于-XX:MaxHeapSize。")])]),t._v(" "),v("p",[v("strong",[t._v("当抛出java.lang.OutOfMemoryError异常时，通过配置-XX:+HeapDumpOnOutOfMemoryError参数使用堆分析器（HPROF）将Java堆转储到当前目录中的文件，可以使用-XX:HeapDumpPath选项显式设置堆转储文件路径和名称")]),t._v("。默认情况下，禁用此选项，并在OutOfMemoryError抛出异常时不转储堆。")]),t._v(" "),v("p",[t._v("以下示例显示如何显式设置默认文件：")]),t._v(" "),v("blockquote",[v("p",[t._v("-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=D:/hukai_heap_dump.hprof")])]),t._v(" "),v("p",[t._v("当设置-XX:+HeapDumpOnOutOfMemoryError选项并且没有设置-XX:HeapDumpPath，则默认在项目根目录下生成hprof快照文件。")]),t._v(" "),v("p",[t._v("推荐设置以上两个参数，并且HeapDumpPath要指定一块有存储空间的区域，否则可能导致存储失败。")]),t._v(" "),v("h2",{attrs:{id:"方法区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方法区"}},[t._v("#")]),t._v(" 方法区")]),t._v(" "),v("h3",{attrs:{id:"方法区概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方法区概述"}},[t._v("#")]),t._v(" 方法区概述")]),t._v(" "),v("p",[v("strong",[t._v("方法区（Method Area）与Java堆一样，是各个线程共享的内存区域，它用于存储已被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码等描述性信息")]),t._v("。虽然Java虚拟机规范把方法区描述为堆的一个逻辑部分，但是它却有一个别名叫做"),v("strong",[t._v("Non-Heap（非堆）")]),t._v("，目的应该是与Java堆区分开来。")]),t._v(" "),v("p",[t._v("JVM规范描述方法区可以在内存上连续也可以不连续，可以固定大小也可以动态扩展，也可以不进行垃圾回收。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513180428.png",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"永久代-permgen"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#永久代-permgen"}},[t._v("#")]),t._v(" 永久代(PermGen)")]),t._v(" "),v("p",[t._v("在jdk1.8（不包含）之前，对于习惯在HotSpot虚拟机上开发、部署程序的开发者来说，很多人都更愿意把方法区称为“永久代”（Permanent Generation），本质上两者并不等价，仅仅是因为jdk1.8之前HoptSpot虚拟机的设计团队为了让这个区域也纳入到GC的范围，所以采用了永久代的方式实现了方法区。这样HotSpot的垃圾收集器可以像管理Java堆一样管理这部分内存。能够省去专门为方法区编写内存管理代码的工作。永久代是HotSpot专有的，而在JRokit、J9虚拟机里没有。")]),t._v(" "),v("p",[t._v("jdk1.8之前，方法区发生我们常见的 java.lang.OutOfMemoryError: PermGen space 异常，可以通过启动参数来控制方法区的大小：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("-XX:PermSize 设置最小空间")])]),t._v(" "),v("li",[v("strong",[t._v("-XX:MaxPermSize 设置最大空间")])])]),t._v(" "),v("p",[t._v("在jdk1.8 之后，HotSpot 虚拟机对方法区进行了不小的改动，彻底移除了永久代，将原来存放在永久代的数据迁移至 Java 堆 或者 Metaspace，方法区被移至到了 Metaspace，字符串常量移至 Java Heap，换句话说就是 JDK1.8 开始，Metaspace 也就是我们所谓的方法区，为什么要做这个改变呢？也许是基于以下两点原因：")]),t._v(" "),v("ul",[v("li",[t._v("由于方法区难以预估大小，而永久代有-XX:MaxPermSize的上限，因此经常引发恼人的 java.lang.OutOfMemoryError: PermGen，且GC效率极低")]),t._v(" "),v("li",[t._v("移除 PermGen 可以促进 HotSpot JVM 与 JRockit VM 的融合，因为 JRockit 没有永久代")])]),t._v(" "),v("p",[t._v("我们来看看HotSpot虚拟机方法区的变化：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513180442.png",alt:""}})]),t._v(" "),v("p",[t._v("可以发现，在jdk1.7的HotSpot中，已经把原本放在永久代的字符串常量池移出。")]),t._v(" "),v("h3",{attrs:{id:"元空间-metaspace"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#元空间-metaspace"}},[t._v("#")]),t._v(" 元空间（Metaspace）")]),t._v(" "),v("p",[t._v("在jdk1.8中已经将永久带移除了。也就是说-XX:PermSize、-XX:MaxPermSize这些参数在jdk8中将是无效的。移除了，肯定有人来代替他。就是新出现的元空间(Metaspace)来代替原来的永久带。")]),t._v(" "),v("p",[t._v("上文也提到了，方法区中主要存放的是一些描述性信息，即元数据。元空间这个名字起得还是挺形象的，至少比原来的永久带要更加见名知意了。")]),t._v(" "),v("p",[t._v("将永久代替换为元空间一个最大的好处就是不需要占用堆内存（Heap Memory）了，元空间直接占用本地内存（Native Memory）。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/jvm/20200513180454.png",alt:""}})]),t._v(" "),v("p",[t._v("我们知道在JVM管理的内存中堆内存（Heap Memor）是可以使用-Xms、\n-Xmx参数限制，而本地内存（Native Memory）由JVM进程使用，无参数限制，受操作系统和物理内存限制。超出也会引发OOM异常。")]),t._v(" "),v("p",[t._v("我们也可以通过设置参数来控制 Metaspace 的空间大小，主要有以下几个命令：")]),t._v(" "),v("blockquote",[v("p",[v("strong",[t._v("-XX:MetaspaceSize=size")]),v("br"),v("br"),t._v("设置分配的类元数据空间的大小，该空间将在第一次超出时触发垃圾回收。根据使用的元数据量，增加或减少垃圾收集的阈\n值。默认大小取决于平台。"),v("br"),v("br"),t._v(" "),v("strong",[t._v("-XX:MaxMetaspaceSize=size")]),v("br"),v("br"),t._v("\n设置可以为类元数据分配的最大本机内存量。默认情况下，大小不受限制。应用程序的元数据量取决于应用程序本身，其他正在运行的应用程序以及系统上可用的内存量。"),v("br"),v("br"),t._v("以下示例显示如何将最大类元数据大小设置为256 MB："),v("br"),t._v("-XX：MaxMetaspaceSize =256m")])]),t._v(" "),v("h3",{attrs:{id:"运行时常量池"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运行时常量池"}},[t._v("#")]),t._v(" 运行时常量池")]),t._v(" "),v("p",[t._v("运行时常量池（Runtime Constant Pool)是方法区的一部分。Class文件中除了有类的版\n本、宇段、方法、接口等描述信息外，还有一项信息是常量池（Constant Pool Table)，用于存放编译期生成的各种字面量和符号引用，这部分内容将在类加载后进入方法区的运行时常量池中存放。")]),t._v(" "),v("p",[t._v("运行时常量池相对于Class文件常量池的另外一个重要特征是具备动态性。Java语言并不要求常量一定只有编译期才能产生，也就是并非预置入Class文件中常量池的内容才能进入方法区运行时常量池，运行期间也可能将新的常置放入池中，这种特性被开发人员利用得比较多的便是String类的inten()方法。")])])}),[],!1,null,null,null);a.default=r.exports}}]);