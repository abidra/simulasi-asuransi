<?php include './partials/head.php' ?>

<div class="container font-fwd">
    <div class="row">
        <div class="col-xs-4 col-xs-offset-4">
            <div id="content-master" class="text-center">
                <?php 
                    include './partials/slides/jk.php';
                    include './partials/slides/age.php';
                    include './partials/slides/job.php';
                    include './partials/slides/income.php';
                    include './partials/slides/expense.php';
                    include './partials/slides/smoke.php';
                    include './partials/slides/surety.php';
                ?>
                <div id="navigator" class="font-signature">
                    <button type="button" class="btn btn-signature nav-previous pull-left">&lt;</button>
                    <button type="button" class="btn btn-signature nav-next pull-right">&gt;</button>
                    <p class="nav-indicator"><span class="nav-current">01</span>/07</p>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include './partials/foot.php' ?>
