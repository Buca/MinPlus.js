const PlusMin = {};

PlusMin.add = function( a, b ) {

	return Math.min( a, b );

};

PlusMin.mul = function( a, b ) {

	return a + b;

};

PlusMin.Vec = function( ...components ) {

	return components;

};

PlusMin.Vec.add = function( out, vecA, vecB, dim ) {

	dim = dim || out.length;

	for( let i = 0; i !== dim; i ++ ) {

		out[ i ] = Math.min( vecA[ i ], vecB[ i ] );

	}

	return out;

};

PlusMin.Vec.mul = function( out, vecA, vecB, dim ) {

	dim = dim || out.length;

	for( let i = 0; i !== dim; i ++ ) {

		out[ i ] = vecA[ i ] + vecB[ i ];

	}

	return out;

};

PlusMin.Vec.dot = function( vecA, vecB, dim ) {

	let result = +Infinity;

	dim = dim || vecA.length;

	for( let i = 0; i !== dim; i ++ ) {

		result = Math.min( result, vecA[ i ] + vecB[ i ] );

	}

	return result;

};

PlusMin.Mat = function( ...components ) {

	return components;

};

PlusMin.Mat.add = function( out, matA, matB, cols, rows ) {

	let dim = out.length || cols * rows;

	for( let i = 0; i !== dim; i ++ ) {

		out[ i ] = Math.min( matA[ i ], matB[ i ] )

	}

	return out;

};

PlusMin.Mat.mul = function( out, matA, matB, colsA, rowsA, colsB, rowsB ) {

	for( let i = 0; i !== colsA; i ++ ) {

		for( let j = 0; j !== rowsB; j ++ ) {

			let index = i * colsA + j

			out[ index ] = +Infinity;

			for( let k = 0; k !== rowsA; k ++ ) {

				out[ index ] = Math.min( out[ index ], matA[ i * colsA + k ] + matB[ k * rowsA + j ] );

			}

		}

	}

	return out;

};

PlusMin.Mat.transpose = function( out, mat, cols, rows ) {

	for( let i = 0; i !== cols; i ++ ) {

		for( let j = 0; j !== rows; j ++ ) {

			out[ j * rows + i ] = mat[ i * cols + j ]

		}

	}

	return out;

};
