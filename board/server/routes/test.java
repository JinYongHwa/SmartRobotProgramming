class Test {

    public static void main(String[] args) {

    }

    // a와 b값을 받아서 더해서 리턴하는 함수
    public int add(int a, int b) {
        return a + b;
    }

    // 배열 arr을 받아서 배열에 가장 큰 수를 반환하는 함수
    public int max(int[] arr) {
        int max = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        return max;
    }

    // 문자열을 입력받아 문자열이'진용화'이면 '천재'라고 출력하는 함수
    public String check(String str) {
        if (str.equals("진용화")) {
            return "천재";
        } else {
            return "안녕";
        }
    }

}