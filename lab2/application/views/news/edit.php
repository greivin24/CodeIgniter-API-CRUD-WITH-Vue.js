<div class="container">
	<h2><?php echo $title; ?></h2>
	<p><a href="<?php echo site_url('news'); ?>">Regresar a la Lista</a></p>

	<?php echo validation_errors(); ?>

	<div class="container-fluid form-group">

		<?php echo form_open('news/edit/'.$news_item['id']); ?>

		<label for="title">Title</label>
		<input class="form-control" type="input" name="title" value="<?php echo $news_item['title'] ?>" /><br />

		<label for="text">Text</label>
		<textarea class="form-control" name="text"><?php echo $news_item['text'] ?></textarea><br />

		<input class="btn btn-warning" type="submit" name="submit" value="Actualizar Noticia" />

		</form>

	</div>

</div>