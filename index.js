(function() {

    var canvas = document.getElementById("glcanvas");
    var gl = glUtils.checkWebGL(canvas);

    var vertexSourceCode =
        'void main() {\n' +
        ' gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n' +
        ' gl_PointSize = 10.0;\n' +
        '}';
    var fragmentSourceCode = 
        'void main() {\n' +
        ' gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);\n' +
        '}';

    var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, vertexSourceCode);
    var fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, fragmentSourceCode);
    var program = glUtils.createProgram(gl, vertexShader, fragmentShader);

    gl.useProgram(program);

    //Bersihkan layar jadi hitam
    gl.clearColor(0.1, 0.33, 0.7, 1.0);

    //Bersihkan buffernya canvas
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.PONTS, 0, 1);

})();