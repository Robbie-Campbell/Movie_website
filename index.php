<?php include "header.php"; ?>
    <div class="container text-center">
        <header>
            <h1 class="title">Films and TV shows</h1>
            <p class="text-muted">Do you need a place to store your films and TV shows you need to watch? Why
                not do it here! </br>
        </header>
        <form>
            
            <input type="text" class="film-input">
            <button class="film-button" type="submit">
                <i class="fas fa-plus-square"></i>
            </button>
        </form>
        <div class="film-container">
            <ul class="film-list"></ul>
        </div>
    </div>
<?php include "footer.php"; ?>