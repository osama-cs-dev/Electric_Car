#include <iostream>

int main() {
    int sum = 0;

    // Iterate from 1 to 100 and accumulate the sum
    for (int i = 1; i <= 100; ++i) {
        sum += i;
    }

    // Output the sum
    std::cout << "The sum of the first 100 natural numbers is: " << sum << std::endl;

    return 0;
}
