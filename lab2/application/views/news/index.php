<div class="container">


<?php if(!empty($this->session)){ if($this->session->flashdata('msg')){

echo '<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong> ' . $this->session->flashdata('msg') .'</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>';

}} ?>


	<h2><?php echo $title; ?></h2>

	<p><a href="<?php echo site_url('news/create'); ?>">Agregar Noticia</a></p>

	<table class="table table-striped table-sm">
		<thead class="thead-dark">
			<th scope="col">ID</th>
			<th scope="col">Titulo</th>
			<th scope="col">Texto</th>
			<th scope="col">Acciones</th>
		</thead>
		<tbody>

			<?php foreach ($news as $news_item) : ?>

			<tr>
				<th scope="row"><?php echo $news_item['id']; ?></th>
				<td><?php echo $news_item['title']; ?></td>
				<td><?php echo $news_item['text']; ?></td>
				<td><p><a class="btn btn-sm btn-warning" href="<?php echo site_url('news/edit/'.$news_item['id']); ?>">Editar</a></p>   <p><a class="btn btn-sm btn-danger" target="_blank" href="<?php echo site_url('news/delete/'.$news_item['id']); ?>">Eliminar</a></p>    <p><a class="btn btn-sm btn-secondary" href="<?php echo site_url('news/report1/'.$news_item['id']); ?>">Imprimir</a></p></td>
			</tr>

			<?php endforeach; ?>

		</tbody>
	</table>

</div>