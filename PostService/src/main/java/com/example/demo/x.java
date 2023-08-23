package com.example.demo;

import java.util.Arrays;

public class x {
//    public static void main(String[] args) {
//        int[] price = new int[]{22, 7, 8, 3,5};
//        Integer loss = null;
//        for (int i = 0; i < price.length - 1; i++) {
//            for (int j = i + 1; j < price.length; j++) {
//                if (price[i] - price[j] > 0 && price[i] - price[j] < (loss == null ? Integer.MAX_VALUE : loss))
//                    loss = price[i] - price[j];
//            }
//        }
//        System.out.println(loss);
//    }

    public static void main(String[] args) {
        int[] arr = new int[]{5,4,1,4};
        int sum = Arrays.stream(arr).sum() - arr[0];
        int sumLeft = 0;
        int k = 0;
        for (int i = 0; i < arr.length; i++) {
            if (sum > sumLeft) {
                sumLeft += arr[k];
                k++;
                sum -= arr[k];
            } else {
                if (sum == sumLeft) {
                    System.out.println(arr[k]);
                } else {
                    System.out.println("NO");
                }
                break;
            }
        }
    }
}
