module.exports = function towelSort(matrix) {
  if (!matrix) return [];
    let sortedMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2) {
            sortedMatrix.push(...matrix[i].reverse());
        } else {
            sortedMatrix.push(...matrix[i]);
        }
    }
    return sortedMatrix;
};
