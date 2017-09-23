<?php include './partials/head.php' ?>

<div class="container font-fwd">
    <div class="row">
        <div class="col-xs-6 col-xs-offset-3">
            <div class="text-center">
                <span class="okebanget okebanget-inline">
                    <span class="callout above text-center">Jenis Kelamin</span>
                </span>
                <div class="choice-scope">
                    <div class="choice-holder">
                        <a href="#" class="choice choice-toggle">
                            <div class="panel panel-primary">
                                <div class="panel-body">
                                    <img class="choice-img" src="./assets/images/Gender/pria.svg">
                                </div>
                            </div>
                            <p class="choice-text">Pria</p>
                            <input type="radio" class="choice-toggle-radio hidden" name="jk" value="l">
                        </a>
                    </div>
                    <div class="choice-holder">
                        <a href="#" class="choice choice-toggle">
                            <div class="panel panel-primary">
                                <div class="panel-body">
                                    <img class="choice-img" src="./assets/images/Gender/wanita.svg">
                                </div>
                            </div>
                            <p class="choice-text">Wanita</p>
                            <input type="radio" class="choice-toggle-radio hidden" name="jk" value="p">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include './partials/foot.php' ?>
