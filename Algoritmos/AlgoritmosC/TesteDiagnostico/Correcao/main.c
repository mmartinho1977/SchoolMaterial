#include <stdio.h>
#include <stdlib.h>


int questaoa1(){

    int x = 3;
    int y = 0;

    y++;
    x = x + y;
    y = x++;

    printf("x = %d || y = %d \n\n", x, y);

    return 0;
}

void questaob1(){

    int x = 3;
    int y = 8;

    x = y % 4;
    y = x + y;

    printf("x = %d || y = %d\n\n", x, y);
}



void questaoc1(){

    int x = 10;
    int y = 100;

    if (x / 2 > 2){
        x = x / 2;
    }
    else {
        x = x + 1;
        y = x * y;
    }

    printf("x = %d || y = %d\n\n", x, y);
}

void questaoba1(){
    int x = 6;
    int y = 10;

    do{
        y = y - x;
        x = x / 2;

    }while (x % 2 != 0);

    printf("x = %d || y = %d\n\n", x, y);
}

void questaod1(){

    int x = 0;
    int y = 0;
    int i;

    for (i = 0; i < 4; i++){
        x = x + 1;
        y = y + x * 3;
    }

    printf("x = %d || y = %d || i = %d\n\n", x, y, i);
}

void questaoa2(){

    int a[4] = {10, 20, 11, 22};
    int b = 0;

    b = a[0] + 2;

    printf("a[3] = %d || b = %d \n\n", a[3], b);
}

void questaob2(){

    int a[5];
    int i;

    for(i=4; i>=0; i--)
        a[i] = i * 2;

     printf("i = %d || a[1] = %d \n\n",i , a[3]);
}


void questaoa3(){
    /*
    int c;					
    int a = 0;	
    for( ,  a<=10, );				
    {					
        If ((a % 2) = 0)				
            c += -1				
        elseif					
            c += 1; a++;				
    }		

    printf("c = %d || a = %d ", c , a);
*/

    int c = 0;					
    int a = 0;	
    for( ;  a<=10;)				
    {					
        if ((a % 2) == 0)				
            c += -1;			
        else				
            c += 1; 
            a++;				
    }		

    printf("c = %d || a = %d \n\n", c , a);
}

void questaob3(){
/*
    int i, d;				
    double a = 1.115; d;			
    do {					
        if(!(i==0))				
            d *= a;				
        else d = 1.0			
    } while(i =< 2)
		

    printf("c = %d || a = %d ", c , a);
*/

    int i = 0, d = 1;				
    double a = 1.115;	

    do {					
        if(!(i==0))				
            d *= (int)a;				
        else 
            d = 1;	
        i++;		
    } while(i <= 2);
		

    printf("i = %d || d = %d || a = %lf\n\n", i , d, a);
}
int main(){
    questaoa1();
    questaob1();
    questaoc1();
    questaod1();
    questaoa2();
    questaob2();
    //questaoa3();
    //questaob3();

    return 0;
}
