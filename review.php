<?php include("base.php"); ?>
    <p class="title">So what did you think?</p>
        <form>
            <div class="select">
                <select name="out-of-10" class="score">
                    <?php
                     for($score = 0; $score <=10; $score++){
                         echo "<option>$score</option>";
                     }
                     ?>
                </select>
            </div>
        </form>
<?php include("footer.php"); ?>