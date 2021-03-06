/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var egret;
(function (egret) {
    /**
     * @class egret.TextField
     * @classdesc
     * TextField是egret的文本渲染类，采用浏览器/设备的API进行渲染，在不同的浏览器/设备中由于字体渲染方式不一，可能会有渲染差异
     * 如果开发者希望所有平台完全无差异，请使用BitmapText
     * @extends egret.DisplayObject
     */
    var TextField = (function (_super) {
        __extends(TextField, _super);
        function TextField() {
            _super.call(this);
            this._inputEnabled = false;
            /**
             * 文本字段的类型。
             * 以下 TextFieldType 常量中的任一个：TextFieldType.DYNAMIC（指定用户无法编辑的动态文本字段），或 TextFieldType.INPUT（指定用户可以编辑的输入文本字段）。
             * 默认值为 dynamic。
             * @member {string} egret.TextField#type
             */
            this._type = "";
            /**
             * 作为文本字段中当前文本的字符串
             * @member {string} egret.TextField#text
             */
            this._text = "";
            /**
             * 指定文本字段是否是密码文本字段。
             * 如果此属性的值为 true，则文本字段被视为密码文本字段，并使用星号而不是实际字符来隐藏输入的字符。如果为 false，则不会将文本字段视为密码文本字段。
             * 默认值为 false。
             * @member {boolean} egret.TextInput#displayAsPassword
             */
            this._displayAsPassword = false;
            /**
             * 使用此文本格式的文本的字体名称，以字符串形式表示。
             * 默认值 Arial。
             * @member {any} egret.TextField#fontFamily
             */
            this._fontFamily = TextField.default_fontFamily;
            /**
             * 使用此文本格式的文本的大小（以像素为单位）。
             * 默认值为 30。
             * @member {number} egret.TextField#size
             */
            this._size = 30;
            this._textColorString = "#FFFFFF";
            /**
             * 表示文本的颜色。
             * 包含三个 8 位 RGB 颜色成分的数字；例如，0xFF0000 为红色，0x00FF00 为绿色。
             * 默认值为 0xFFFFFF。
             * @member {number} egret.TextField#textColor
             */
            this._textColor = 0xFFFFFF;
            this._strokeColorString = "#000000";
            /**
             * 表示文本的描边颜色。
             * 包含三个 8 位 RGB 颜色成分的数字；例如，0xFF0000 为红色，0x00FF00 为绿色。
             * 默认值为 0x000000。
             * @member {number} egret.TextField#strokeColor
             */
            this._strokeColor = 0x000000;
            /**
             * 表示描边宽度。
             * 0为没有描边。
             * 默认值为 0。
             * @member {number} egret.TextField#stroke
             */
            this._stroke = 0;
            /**
             * 文本水平对齐方式
             * 使用HorizontalAlign定义的常量。
             * 默认值为 HorizontalAlign.LEFT。
             * @member {string} egret.TextField#textAlign
             */
            this._textAlign = "left";
            /**
             * 文本垂直对齐方式。
             * 使用VerticalAlign定义的常量。
             * 默认值为 VerticalAlign.TOP。
             * @member {string} egret.TextField#verticalAlign
             */
            this._verticalAlign = "top";
            /**
             * 行间距
             * 一个整数，表示行与行之间的垂直间距量。
             * 默认值为 0。
             * @member {number} egret.TextField#lineSpacing
             */
            this._lineSpacing = 0;
            /**
             * 文本行数。【只读】
             * @member {number} egret.TextField#numLines
             */
            this._numLines = 0;
            /**
             * 表示字段是否为多行文本字段。
             * 如果值为 true，则文本字段为多行文本字段；如果值为 false，则文本字段为单行文本字段。在类型为 TextFieldType.INPUT 的字段中，multiline 值将确定 Enter 键是否创建新行（如果值为 false，则将忽略 Enter 键）。
             * 默认值为 false。
             * @member {boolean} egret.TextField#multiline
             */
            this._multiline = false;
            this.measuredWidths = [];
        }
        TextField.prototype.isInput = function () {
            return this._type == egret.TextFieldType.INPUT;
        };
        TextField.prototype._setTouchEnabled = function (value) {
            _super.prototype._setTouchEnabled.call(this, value);
            if (this.isInput()) {
                this._inputEnabled = true;
            }
        };
        Object.defineProperty(TextField.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (value) {
                this._setType(value);
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._setType = function (value) {
            if (this._type != value) {
                this._type = value;
                if (this._type == egret.TextFieldType.INPUT) {
                    //创建stageText
                    if (this._inputUtils == null) {
                        this._inputUtils = new egret.InputController();
                    }
                    this._inputUtils.init(this);
                    this._setDirty();
                    if (this._stage) {
                        this._inputUtils._addStageText();
                    }
                }
                else {
                    if (this._inputUtils) {
                        this._inputUtils._removeStageText();
                        this._inputUtils = null;
                    }
                }
            }
        };
        Object.defineProperty(TextField.prototype, "text", {
            get: function () {
                return this._getText();
            },
            set: function (value) {
                this._setText(value);
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._getText = function () {
            if (this._multiline) {
                return this._text;
            }
            else {
                return this._text.replace(/[\r\n]/g, "");
            }
        };
        TextField.prototype._setTextDirty = function () {
            this._setSizeDirty();
        };
        TextField.prototype._setBaseText = function (value) {
            if (this._text != value || this._displayAsPassword) {
                this._setTextDirty();
                this._text = value;
                var text = "";
                if (this._displayAsPassword) {
                    for (var i = 0, num = this._text.length; i < num; i++) {
                        switch (this._text.charAt(i)) {
                            case '\n':
                                text += "\n";
                                break;
                            case '\r':
                                break;
                            default:
                                text += '*';
                        }
                    }
                }
                else {
                    text = this._text;
                }
                this._drawText = text;
            }
        };
        TextField.prototype._setText = function (value) {
            this._setBaseText(value);
            if (this._inputUtils) {
                this._inputUtils._setText(this._text);
            }
        };
        Object.defineProperty(TextField.prototype, "displayAsPassword", {
            get: function () {
                return this._displayAsPassword;
            },
            set: function (value) {
                this._setDisplayAsPassword(value);
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._setDisplayAsPassword = function (value) {
            if (this._displayAsPassword != value) {
                this._displayAsPassword = value;
                this._setText(this._text);
            }
        };
        Object.defineProperty(TextField.prototype, "fontFamily", {
            get: function () {
                return this._fontFamily;
            },
            set: function (value) {
                this._setFontFamily(value);
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._setFontFamily = function (value) {
            if (this._fontFamily != value) {
                this._setTextDirty();
                this._fontFamily = value;
            }
        };
        Object.defineProperty(TextField.prototype, "size", {
            get: function () {
                return this._size;
            },
            set: function (value) {
                this._setSize(value);
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._setSize = function (value) {
            if (this._size != value) {
                this._setTextDirty();
                this._size = value;
            }
        };
        Object.defineProperty(TextField.prototype, "italic", {
            get: function () {
                return this._italic;
            },
            set: function (value) {
                this._setItalic(value);
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._setItalic = function (value) {
            if (this._italic != value) {
                this._setTextDirty();
                this._italic = value;
            }
        };
        Object.defineProperty(TextField.prototype, "bold", {
            get: function () {
                return this._bold;
            },
            set: function (value) {
                this._setBold(value);
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._setBold = function (value) {
            if (this._bold != value) {
                this._setTextDirty();
                this._bold = value;
            }
        };
        Object.defineProperty(TextField.prototype, "textColor", {
            get: function () {
                return this._textColor;
            },
            set: function (value) {
                this._setTextColor(value);
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._setTextColor = function (value) {
            if (this._textColor != value) {
                this._setTextDirty();
                this._textColor = value;
                this._textColorString = egret.toColorString(value);
            }
        };
        Object.defineProperty(TextField.prototype, "strokeColor", {
            get: function () {
                return this._strokeColor;
            },
            set: function (value) {
                this._setStrokeColor(value);
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._setStrokeColor = function (value) {
            if (this._strokeColor != value) {
                this._setTextDirty();
                this._strokeColor = value;
                this._strokeColorString = egret.toColorString(value);
            }
        };
        Object.defineProperty(TextField.prototype, "stroke", {
            get: function () {
                return this._stroke;
            },
            set: function (value) {
                this._setStroke(value);
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._setStroke = function (value) {
            if (this._stroke != value) {
                this._setTextDirty();
                this._stroke = value;
            }
        };
        Object.defineProperty(TextField.prototype, "textAlign", {
            get: function () {
                return this._textAlign;
            },
            set: function (value) {
                this._setTextAlign(value);
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._setTextAlign = function (value) {
            if (this._textAlign != value) {
                this._setTextDirty();
                this._textAlign = value;
            }
        };
        Object.defineProperty(TextField.prototype, "verticalAlign", {
            get: function () {
                return this._verticalAlign;
            },
            set: function (value) {
                this._setVerticalAlign(value);
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._setVerticalAlign = function (value) {
            if (this._verticalAlign != value) {
                this._setTextDirty();
                this._verticalAlign = value;
            }
        };
        Object.defineProperty(TextField.prototype, "maxScrollV", {
            get: function () {
                return this._numLines;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextField.prototype, "selectionBeginIndex", {
            get: function () {
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextField.prototype, "selectionEndIndex", {
            get: function () {
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextField.prototype, "caretIndex", {
            get: function () {
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._setSelection = function (beginIndex, endIndex) {
        };
        Object.defineProperty(TextField.prototype, "lineSpacing", {
            get: function () {
                return this._lineSpacing;
            },
            set: function (value) {
                this._setLineSpacing(value);
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._setLineSpacing = function (value) {
            if (this._lineSpacing != value) {
                this._setTextDirty();
                this._lineSpacing = value;
            }
        };
        TextField.prototype._getLineHeight = function () {
            return this._lineSpacing + this._size;
        };
        Object.defineProperty(TextField.prototype, "numLines", {
            get: function () {
                return this._numLines;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextField.prototype, "multiline", {
            get: function () {
                return this._multiline;
            },
            set: function (value) {
                this._setMultiline(value);
            },
            enumerable: true,
            configurable: true
        });
        TextField.prototype._setMultiline = function (value) {
            this._multiline = value;
            this._setDirty();
        };
        TextField.prototype.setFocus = function () {
            //todo:
            egret.Logger.warning("TextField.setFocus 没有实现");
        };
        TextField.prototype._onRemoveFromStage = function () {
            _super.prototype._onRemoveFromStage.call(this);
            if (this._type == egret.TextFieldType.INPUT) {
                this._inputUtils._removeStageText();
            }
        };
        TextField.prototype._onAddToStage = function () {
            _super.prototype._onAddToStage.call(this);
            if (this._type == egret.TextFieldType.INPUT) {
                this._inputUtils._addStageText();
            }
        };
        TextField.prototype._updateBaseTransform = function () {
            _super.prototype._updateTransform.call(this);
        };
        TextField.prototype._updateTransform = function () {
            if (this._type == egret.TextFieldType.INPUT) {
                if (this._normalDirty) {
                    this._clearDirty();
                    this._inputUtils._updateProperties();
                }
                else {
                    this._inputUtils._updateTransform();
                }
            }
            else {
                this._updateBaseTransform();
            }
        };
        /**
         * @see egret.DisplayObject._render
         * @param renderContext
         */
        TextField.prototype._render = function (renderContext) {
            this.drawText(renderContext, false);
            this._clearDirty();
        };
        /**
         * 测量显示对象坐标与大小
         */
        TextField.prototype._measureBounds = function () {
            var renderContext = egret.MainContext.instance.rendererContext;
            return this.drawText(renderContext, true);
        };
        /**
         * @private
         * @param renderContext
         * @returns {Rectangle}
         */
        TextField.prototype.drawText = function (renderContext, forMeasure) {
            var lines = this.getTextLines(renderContext);
            if (!lines) {
                this._numLines = 0;
                this._textHeight = 0;
                this._textWidth = 0;
                return egret.Rectangle.identity.initialize(0, 0, 0, 0);
            }
            var length = lines.length;
            this._numLines = length;
            var drawY = this._size * 0.5;
            var hGap = this._size + this._lineSpacing;
            var textHeight = length * hGap - this._lineSpacing;
            this._textHeight = textHeight;
            var explicitHeight = this._hasHeightSet ? this._explicitHeight : Number.POSITIVE_INFINITY;
            if (this._hasHeightSet && textHeight < explicitHeight) {
                var valign = 0;
                if (this._verticalAlign == egret.VerticalAlign.MIDDLE)
                    valign = 0.5;
                else if (this._verticalAlign == egret.VerticalAlign.BOTTOM)
                    valign = 1;
                drawY += valign * (explicitHeight - textHeight);
            }
            drawY = Math.round(drawY);
            //            var minY:number = drawY;
            var halign = 0;
            if (this._textAlign == egret.HorizontalAlign.CENTER) {
                halign = 0.5;
            }
            else if (this._textAlign == egret.HorizontalAlign.RIGHT) {
                halign = 1;
            }
            var measuredWidths = this.measuredWidths;
            var maxWidth;
            if (this._hasWidthSet) {
                maxWidth = this._explicitWidth;
            }
            else {
                maxWidth = this._textWidth;
            }
            for (var i = 0; i < length; i++) {
                var line = lines[i];
                var measureW = measuredWidths[i];
                var drawX = Math.round((maxWidth - measureW) * halign);
                //                if (drawX < minX) {
                //                    minX = drawX;
                //                }
                if (!forMeasure && drawY < explicitHeight) {
                    renderContext.drawText(this, line, drawX, drawY, maxWidth);
                }
                drawY += hGap;
            }
            return egret.Rectangle.identity.initialize(0, 0, maxWidth, textHeight);
        };
        TextField.prototype.getTextLines = function (renderContext) {
            var text = this._drawText ? this._drawText.toString() : "";
            if (!text) {
                return null;
            }
            var measuredWidths = this.measuredWidths;
            measuredWidths.length = 0;
            renderContext.setupFont(this);
            var lines = text.split(/(?:\r\n|\r|\n)/);
            var length = lines.length;
            var maxWidth = 0;
            if (this._hasWidthSet) {
                var explicitWidth = this._explicitWidth;
                for (var i = 0; i < length; i++) {
                    var line = lines[i];
                    var measureW = renderContext.measureText(line);
                    if (measureW > explicitWidth) {
                        var newLine = "";
                        var lineWidth = 0;
                        var len = line.length;
                        for (var j = 0; j < len; j++) {
                            var word = line.charAt(j);
                            measureW = renderContext.measureText(word);
                            if (lineWidth + measureW > explicitWidth) {
                                if (lineWidth == 0) {
                                    lines.splice(i, 0, word);
                                    measuredWidths[i] = measureW;
                                    if (maxWidth < measureW) {
                                        maxWidth = measureW;
                                    }
                                    measureW = 0;
                                    word = "";
                                }
                                else {
                                    lines.splice(i, 0, newLine);
                                    measuredWidths[i] = lineWidth;
                                    if (maxWidth < lineWidth) {
                                        maxWidth = lineWidth;
                                    }
                                    newLine = "";
                                    lineWidth = 0;
                                }
                                i++;
                                length++;
                            }
                            lineWidth += measureW;
                            newLine += word;
                        }
                        lines[i] = newLine;
                        measuredWidths[i] = lineWidth;
                    }
                    else {
                        measuredWidths[i] = measureW;
                        if (maxWidth < measureW) {
                            maxWidth = measureW;
                        }
                    }
                }
            }
            else {
                for (i = 0; i < length; i++) {
                    line = lines[i];
                    measureW = renderContext.measureText(line);
                    measuredWidths[i] = measureW;
                    if (maxWidth < measureW) {
                        maxWidth = measureW;
                    }
                }
            }
            this._textWidth = maxWidth;
            return lines;
        };
        TextField.default_fontFamily = "Arial";
        return TextField;
    })(egret.DisplayObject);
    egret.TextField = TextField;
    TextField.prototype.__class__ = "egret.TextField";
})(egret || (egret = {}));
