new Vue({
    el:'#vue-app',
    data: {
        health: 100,
        ended: false,
        x : 0,
        y : 0
    },
    methods: {
        updatexy: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        punch: function(){
            if(this.x>41 && this.x<160 && this.y>190 && this.y<439){
                if(this.y > 420){
                    if(this.x < 43 || this.x >154){
                        return;
                    }
                }
                this.health -= 10;
                if( this.health <= 0){
                    this.ended = true;
                }
            }
        },
        restart: function(){
            this.health = 100;
            this.ended = false;
        }
    },
    computed:{

    }
});